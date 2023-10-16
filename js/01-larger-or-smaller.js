var firstNum = parseInt(prompt("Enter the first integer:"), 10);
var secondNum = parseInt(prompt("Enter the second integer:"), 10);

if (firstNum === secondNum) {
    document.write("Both numbers are equal: " + firstNum);
} else if (firstNum > secondNum) {
    document.write("The larger number is: " + firstNum);
} else {
    document.write("The larger number is: " + secondNum);
}