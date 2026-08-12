document.write(typeof "Collin"); //Writes what type of data is being used, in this case a string

document.write("Collin" + 10); //Concatenates the string "Collin" with the number 10

function NaNFunction() { //Function that will display whether or not the value is NaN (Not a Number), In this case returning NaN because of the attempt to divide 0 by itself
    document.getElementById("NaNTest").innerHTML = 0/0;
}

function isNaN1() { //Function that will display whether or not the value is NaN (Not a Number), in this case returning true
    document.getElementById("NaNTest2").innerHTML = isNaN("Collin");
}

function isNaN2() { //Function that will display whether or not the value is NaN (Not a Number), in this case returning false
    document.getElementById("NaNTest3").innerHTML = isNaN(10);
}

function infinite1() { //Function that attmepts to display the full value of 3E310, which is too large to be displayed and will return Infinity
    document.getElementById("Infinity").innerHTML = (3E310);
}

function infinite2() { //Function that attempts to display the full value of -3E310, which is too large to be displayed and will return Negative Infinity
    document.getElementById("NegInfinity").innerHTML = (-3E310);
}

document.write(33 > 7); //Displays whether or not 33 is greater than 7, in this case returning true

document.write(11 < 3); //Displays whether or not 11 is less than 3, in this case returning false

console.log(8 * 5); //Logs the result of 8 and 5 to the console

console.log(6 > 11); //Logs whether or not 6 is greater than 11 to the console

document.write(55 == 55); //Displays whether or not 55 is equal to 55, in this case returning true

document.write(2 == 20); //Displays whether or not 2 is equal to 20, in this case returning false

document.write(10 === 10); //Displays whether or not 10 is equal to 10 and of the same type, in this case returning true

document.write(10 === "Collin"); //Displays whether or not 10 is equal to "Collin" and of the same type, in this case returning false

document.write(10 === "10"); //Displays whether or not 10 is equal to "10" and of the same type, in this case returning false

document.write(10 === 5); //Displays whether or not 10 is equal to 5 and of the same type, in this case returning false

document.write(7 > 3 && 10 > 5); //Displays whether or not both conditions are true, in this case returning true

document.write(7 > 3 && 10 < 5); //Displays whether or not both conditions are true, in this case returning false

document.write(7 < 3 || 10 > 5); //Displays whether or not at least one condition is true, in this case returning true

document.write(7 < 3 || 10 < 5); //Displays whether or not at least one condition is true, in this case returning false

function notFunction1() { //Function that will check whether something is true or not, with the output returning the opposite, in this case returning false
    document.getElementById("Not1").innerHTML = !(20 > 10);
}

function notFunction2() { //Function that will check whether something is true or not, with the output returning the opposite, in this case returning true
    document.getElementById("Not2").innerHTML = !(20 < 10);
}