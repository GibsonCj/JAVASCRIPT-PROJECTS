function addFunction() { //This function creates a function called addFunction and then uses addition on the numbers given before writing the result to the webpage. 
    var add1 = 15 + 32; 
    document.getElementById("add").innerHTML = add1;
}

function subtractFunction() { //This function creates a function called subtractFunction and then uses subtraction on the numbers given before writing the result to the webpage.
    var subtract1 = 32 - 15;
    document.getElementById("subtract").innerHTML = subtract1;
}

function multiplyFunction() { //This function creates a function called multiplyFunction and then uses multiplication on the numbers given before writing the result to the webpage.
    var multiply1 = 15 * 32;
    document.getElementById("multiply").innerHTML = multiply1;
}

function modulusFunction() { //This function creates a function called modulusFunction and then uses the modulus operator on the numbers given before writing the result to the webpage.
    var modulus1 = 33 % 2;
    document.getElementById("modulus").innerHTML = modulus1;
}

function incrementFunction() { //This function creates a function called incrementFunction and then uses the increment operator on the number given once before writing the result to the webpage.
    var increment1 = 15;
    increment1++;
    document.getElementById("increment").innerHTML = increment1;
}

function decrementFunction() { //This function creates a function called decrementFunction and then uses the decrement operator on the number given once before writing the result to the webpage.
    var decrement1 = 32;
    decrement1--;
    document.getElementById("decrement").innerHTML = decrement1;
}

function randomFunction() { //This function creates a function called randomFunction and then uses the Math.random() method to generate a random number between 0 and 100 before rounding it to the nearest whole number and writing the result to the webpage.
    var random1 = Math.random() * 100;
    random1 = Math.round(random1);
    document.getElementById("random").innerHTML = random1;
}