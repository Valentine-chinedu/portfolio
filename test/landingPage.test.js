import React from "react";

import { render, screen } from "@testing-library/react";
import HeroSection from "../components/home/Hero";

describe("Landing page", () => {
	it("should render the heading", () => {
		render(<HeroSection />);

		expect(
			screen.getByRole("heading", { name: "Chinedu V. Okosi.", level: 1 })
		).toBeInTheDocument();
	});
});
