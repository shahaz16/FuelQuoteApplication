import supertest from "supertest";
import pricingModule from "../utils/pricingModule";

describe("PriceMod Tests", () => {

    test("should return suggested price and total price", () => {
        const response = pricingModule(1000, "TX", 77062, 3.00, "2021-07-22");
        expect(response).toEqual({ suggestedPrice: 1.71, totalAmountDue: 1710 });
    }
    )
  
})