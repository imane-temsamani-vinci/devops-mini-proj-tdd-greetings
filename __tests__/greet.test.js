const greet = require("../src/greet");

// Case 1
test("greet should return Hello, Bob.", () => {
    const result = greet("Bob");
    expect(result).toBe("Hello, Bob.");
});

// Case 2 when name is null
test("greet should return Hello, my friend.", () => {
    const result = greet(null);
    expect(result).toBe("Hello, my friend.");
});

// Case 2 when name is undefined
test("greet should return Hello, my friend.", () => {
    const result = greet(undefined);
    expect(result).toBe("Hello, my friend.");
});

// Case 2 when name is empty
test("greet should return Hello, my friend.", () => {
    const result = greet("   ");
    expect(result).toBe("Hello, my friend.");
});

// Case 3 when name is UPPERCASE
test("greet should return HELLO, KENOBI!", () => {
    const result = greet("KENOBI");
    expect(result).toBe("HELLO, KENOBI!");
});

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

// Case 7 when name is an array with 'fr'
test("greet should return Bonjour, Kratos et Thanatos", () => {
    const result = greet(["Kratos", "Thanatos", "fr"]);
    expect(result).toBe("Bonjour, Kratos et Thanatos.");
});

// Case 7 when name is an array with 'fr' and one name
test("greet should return Bonjour, Kratos.", () => {
    const result = greet(["Kratos", "fr"]);
    expect(result).toBe("Bonjour, Kratos.");
});

// Case 7 when name is an array with 'fr' and one name in UPPERCASE
test("greet should return BONJOUR, KRATOS!", () => {
    const result = greet(["KRATOS", "fr"]);
    expect(result).toBe("BONJOUR, KRATOS!");
});

// Case 7 when name is an array with 'nl'
test("greet should return Goeiedag, Kratos en Thanatos.", () => {
    const result = greet(["Kratos", "nl", "Thanatos"]);
    expect(result).toBe("Goeiedag, Kratos en Thanatos.");
});

// Case 7 when name is an array with 'nl' and one name in UPPERCASE
test("greet should return GOEIEDAG, KRATOS!", () => {
    const result = greet(["KRATOS", "nl"]);
    expect(result).toBe("GOEIEDAG, KRATOS!");
});
