import { sayHello } from "../src/say-hello";

describe("Hello", function () {
    it("should say hello", function () {
        const name = "Hello Radit";
        expect(name).toBe("Hello Radit");
    });
});
