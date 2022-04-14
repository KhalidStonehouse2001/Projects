import { render, screen } from "@testing-library/react";
import Foodcard from "./foodCard";
describe("Testing Food Card Component", () => {
  describe("Food Name ", () => {
    it("Renders Food Name", () => {
      const foodMockData = {
        name: "Mock Food",
        image: "url",
        origin: "Manchester",
        starRating: 5,
      };
      render(<Foodcard food={foodMockData} />);
      const foodNameElement = screen.getByText("Food Name: Mock Food");
      expect(foodNameElement).toBeInTheDocument();
    });
  });
  describe("Food Image", () => {
    it("Renders Food Image", () => {
      const foodMockData = {
        name: "Mock Food",
        image: "url",
        origin: "Manchester",
        starRating: 5,
      };
      render(<Foodcard food={foodMockData} />);
      const foodImageElement = screen.getByTestId("food-card-item");
      expect(foodImageElement).toBeInTheDocument();
    });
  });
  describe("Food Rating", () => {
    it("Renders Food Rating", () => {
      const foodMockData = {
        name: "Mock Food",
        image: "url",
        origin: "Manchester",
        starRating: 4,
      };
      render(<Foodcard food={foodMockData} />);
      const foodRatingElement = screen.getByText("Star Rating: 4 ⭐️");
      expect(foodRatingElement).toBeInTheDocument();
    });
  });
  describe("Food Origin", () => {
    it("Renders Food Origin", () => {
      const foodMockData = {
        name: "Mock Food",
        image: "url",
        origin: "Manchester",
        starRating: 4,
      };
      render(<Foodcard food={foodMockData} />);
      const foodOriginElement = screen.getByText("Place Of Origin: Manchester");
      expect(foodOriginElement).toBeInTheDocument();
    });
  });
});
