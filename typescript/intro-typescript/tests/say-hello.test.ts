import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
    it("should say hello Radit", function () {
        const name = "Radit";
        expect(sayHello(name)).toBe("Hello Radit");
    });
});
