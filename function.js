function calculate(num1, num2, operator) {
    // if (!num1 || !num2) {
    //     return "Invalid number"
    // }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            return "Invalid operator"
    }
}


module.exports = calculate