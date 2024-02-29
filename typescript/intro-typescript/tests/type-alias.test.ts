import { Category } from "../src/type-alias";

describe("Type Alias", function () {
    it("should support in typescript", function () {
        const category: Category = {
            id: "1",
            name: "Handphone",
        };

        const product = {
            id: "1",
            name: "iphone 14",
            price: 2000000,
            category: category,
        };

        console.log(category);
        console.log(product);
    });
});

export {};
