function calculate(num1, num2, operator) {
    // if (!num1 || !num2) {
    //     return "Invalid number"
    // }

    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else {
        return "Invalid operator"
    }

    // switch (operator) {
    //     case "+":
    //         return num1 + num2;
    //     case "-":
    //         return num1 - num2;
    //     case "/":
    //         return num1 / num2;
    //     case "*":
    //         return num1 * num2;
    //     default:
    //         return "Invalid operator"
    // }
}


module.exports = calculate