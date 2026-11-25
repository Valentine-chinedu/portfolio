/** @jest-environment node */
import { ApolloClient, HttpLink } from "@apollo/client";
import { getArticles } from "../utilities/getArticles";

jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  ApolloClient: jest.fn(),
  HttpLink: jest.fn(),
}));

const query = jest.fn();
beforeEach(() => {
  query.mockReset();
  ApolloClient.mockImplementation(() => ({ query }));
});

afterEach(() => jest.restoreAllMocks());

it("loads articles using HttpLink without cache and normalizes a missing cover image", async () => {
  query.mockResolvedValue({
    data: {
      publication: {
        posts: {
          edges: [
            {
              node: {
                id: "1",
                title: "Article",
                url: "https://example.com/article",
                publishedAt: "2026-11-25",
                coverImage: null,
              },
            },
          ],
        },
      },
    },
  });
  expect(await getArticles()).toEqual([
    {
      _id: "1",
      title: "Article",
      url: "https://example.com/article",
      dateAdded: "2026-11-25",
      coverImage: null,
      brief: "",
    },
  ]);
  expect(ApolloClient).toHaveBeenLastCalledWith(
    expect.objectContaining({ link: expect.any(HttpLink) })
  );
  expect(query).toHaveBeenCalledWith(
    expect.objectContaining({ fetchPolicy: "no-cache" })
  );
});

it("returns an empty feed when Hashnode returns HTML or a network error", async () => {
  const warning = jest.spyOn(console, "warn").mockImplementation(() => {});
  query.mockRejectedValue(
    new Error("Unexpected token <; secret response body")
  );
  expect(await getArticles()).toEqual([]);
  expect(warning).toHaveBeenCalledTimes(1);
  expect(warning.mock.calls[0][0]).not.toContain("secret response body");
});

it("handles a missing publication", async () => {
  query.mockResolvedValue({ data: { publication: null } });
  expect(await getArticles()).toEqual([]);
});
