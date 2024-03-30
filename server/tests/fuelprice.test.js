import app from "../index.js";
import request from "supertest";

describe("Fuel Quote Tests", () => {

    test("canary test", () => {
        expect(true).toEqual(true);
    })

    test("should return 200 if all fields are valid", async () => {
        const response = await request(app).get("/api/history")
        
        const quote1 = {
            "gallon_requested": "1000",
            "address1": "1234 abc",
            "address2": "",
            "city": "Houston",
            "state": "TX",
            "zipcode": "75001",
            "date": "2023-01-01",
            "suggested_price": "2.50",
            "total_price": "2500.00",
        }

        const quote2 = {
            "gallon_requested": "100",
            "address1": "3324 fc st",
            "address2": "",
            "city": "Houston",
            "state": "TX",
            "zipcode": "55998",
            "date": "2024-06-09",
            "suggested_price": "1.00",
            "total_price": "100.00",
        }

        const quote3 = {
            "gallon_requested": "500",
            "address1": "990 ave",
            "address2": "",
            "city": "Dallas",
            "state": "TX",
            "zipcode": "33221",
            "date": "2024-10-24",
            "suggested_price": "5.00",
            "total_price": "2500.00",
        }

        expect(response.status).toEqual(200)
        expect(response.body).toEqual([quote1, quote2, quote3])
    })

})
