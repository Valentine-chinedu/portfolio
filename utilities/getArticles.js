import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";

export async function getArticles() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "https://gql.hashnode.com",
        headers: process.env.HASHNODE_ACCESS_TOKEN
          ? { Authorization: process.env.HASHNODE_ACCESS_TOKEN }
          : {},
        fetchOptions: { signal: controller.signal },
      }),
      cache: new InMemoryCache(),
    });
    const { data } = await client.query({
      fetchPolicy: "no-cache",
      query: gql`
        query Publication {
          publication(host: "chineduokosi.hashnode.dev") {
            isTeam
            title
            posts(first: 12) {
              edges {
                node {
                  title
                  brief
                  url
                  id
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `,
    });
    return (data?.publication?.posts?.edges ?? [])
      .filter((edge) => edge?.node)
      .map(({ node }) => ({
        _id: node.id,
        title: node.title,
        brief: node.brief ?? "",
        url: node.url,
        dateAdded: node.publishedAt,
        coverImage: node.coverImage?.url ?? null,
      }));
  } catch {
    console.warn(
      "Hashnode articles unavailable; displaying the blog link instead. Check Hashnode API access."
    );
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
