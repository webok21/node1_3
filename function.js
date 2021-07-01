function calculate(num1, num2, operator) {
    // if (!num1 || !num2) {
    //     return "Invalid number"
    // }
    if (!['*', '-', '/', '+'].includes(operator)) {
        return "Invalid operator"
    }
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
    }
}


module.exports = calculate