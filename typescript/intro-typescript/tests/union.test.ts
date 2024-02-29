describe("Union Type", function () {
    it("should support in typescript", function () {
        let sample: number | string | boolean = "Radit";
        console.log(sample);

        sample = 100;
        console.log(sample);

        sample = true;
        console.log(sample);

        sample = "test";
        console.log(sample);
    });

    it("should support typeof operator", function () {
        function process(value: number | string | boolean) {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value == "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Eko")).toBe("EKO");
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);
    });
});
