var readlineSync = require('readline-sync');

var firstNum= readlineSync.questionInt("Please provide your first number: ");
var secondNum= readlineSync.questionInt("Please provide your second number: ");
var userOperation=readlineSync.question("Please enter the operation to perform(add, sub, mul, div): ");

function add(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1-num2;
}
function mul(num1, num2){
    return num1*num2;
}
function div(num1, num2){
    return num1/num2;
}

function myCalculator(number1, number2, enteredOperation){
    const input=userOperation;
    switch(input){
        case "add": 
             console.log(add(number1,number2));
             break;
             case "sub":
                console.log(sub(number1,number2));
                break;
                case "mul":
                    console.log(mul(number1,number2));
                    break;
                    case "div":
                        console.log(div(number1,number2));
                        break;
                        default:
                            console.log("That is not a valid entry.");

    }

};

myCalculator(firstNum, secondNum, userOperation);