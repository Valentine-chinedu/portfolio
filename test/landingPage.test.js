import React from "react";

import { render, screen, cleanup } from "@testing-library/react";
import LandingPage from "../components/LandingPage";

afterEach(cleanup);

describe("LandPage", () => {
	it("should render the heading", () => {
		render(<LandingPage />);

		const heading = screen.getByText;
	});
});
