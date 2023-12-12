const greet = require("../src/greet");

// Case 4 when name is an array of 2 names
test("greet should return Hello, Kratos and Thanathos.", () => {
    const result = greet(["Kratos", "Thanathos"]);
    expect(result).toBe("Hello, Kratos and Thanathos.");
});

// Case 5 when name is an array of more than 2 names
test("greet should return Hello, Kratos, Thanathos and Hypnos.", () => {
    const result = greet(["Kratos", "Thanathos", "Hypnos"]);
    expect(result).toBe("Hello, Kratos, Thanathos and Hypnos.");
});

// Case 6 when name is an array with UPPERCASE and lowercase names
test("greet should return Hello, Amy and Charlotte. AND HELLO BRIAN!", () => {
    const result = greet(["Amy", "BRIAN", "Charlotte"]);
    expect(result).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});
