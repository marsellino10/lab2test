/* // task1 

var message = prompt("Enter a message:");
for (var i = 1; i <= 6; i++) {
    document.write("<h" + i + ">" + message + "</h" + i + ">");
}
document.write("<br><hr><br>");

// task2

var sum = 0;
while(sum <= 100){

    var num = prompt("Enter a number (0 to stop):");

    if(isNaN(num)) {
        alert("Please enter a valid number.");
        continue;
    }

    num = parseInt(num);
    if (num === 0) {
        break;
    }

    sum += num;
    console.log("sum: " + sum);
}
document.write("Total sum: " + sum);
document.write("<br><hr><br>");

// task3 

var x = parseInt(prompt("Enter number1: "));
var y = parseInt(prompt("Enter number2: "));
var z = parseInt(prompt("Enter number3: "));

if(y===0 || z===0){
    document.write("Division by zero is not allowed.");
}else{
    if(x%y===0 && x%z === 0){
        console.log(x + " is divisible by " + y + " and " + z);
        document.write(x + " is divisible by " + y + " and " + z);
    }else if(x%y===0){
        console.log(x + " is divisible by " + y +" only");
        document.write(x + " is divisible by " + y +" only");
    }else if(x%z===0){
        console.log(x + " is divisible by " + z +" only");
        document.write(x + " is divisible by " + z +" only");
    }else{
        console.log(x + " is not divisible by " + y +" or " + z);
        document.write(x + " is not divisible by " + y +" or " + z);
    }
}
document.write("<br><hr><br>"); */

// task4 

function getAndDisplay() {
    //console.log("dsan");
    var x = parseInt(prompt("Enter the first number (x):"));
    var y = parseInt(prompt("Enter the second number (y):"));
    var z = prompt("Enter the type (odd, even, no):");

    
    if (isNaN(x) || isNaN(y)) {
        console.log("Please enter valid numeric values for x and y.");
        return;
    }

    if (z !== "odd" && z !== "even" && z !== "no") {
        console.log("Please enter a valid string for z: 'odd', 'even', or 'no'.");
        return;
    }

    var sum = 0;

    var step = x < y ? 1 : -1;

    for (var i = x; (step === 1 ? i <= y : i >= y); i += step) {
        if (z == "odd" && i % 2 == 1) {
            console.log(i + " ");
            document.write(i + " ");
            sum += i;
        } else if (z === "even" && i % 2 === 0) {
            console.log(i + " ");
            document.write(i + " ");
            sum += i;
        } else if (z === "no") {
            console.log(i + " ");
            document.write(i + " ");
            sum += i;
        }
    }
    console.log("Sum: " + sum);
    
    document.write("Sum: " + sum);
}

getAndDisplay();

