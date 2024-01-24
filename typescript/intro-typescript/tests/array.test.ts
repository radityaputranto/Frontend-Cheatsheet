describe("Array", function () {
    it("should same with javascript", function () {
        const employes: string[] = ["jhon", "doe", "radit"];
        const values: number[] = [1, 2, 3];

        console.log(employes);
        console.log(values);
    });

    it("should same with javascript", function () {
        const hobies: ReadonlyArray<string> = [
            "readind",
            "writing",
            "painting",
        ];

        console.log(hobies);
        //hobies[0] = "gaming";
    });

    it("should support tupple", function () {
        const person: readonly [string, string, number] = ["tes", "test", 123];

        console.info(person);
        console.info(person[0]);
        console.info(person[1]);

        // person[0] = "radit";
    });
});
