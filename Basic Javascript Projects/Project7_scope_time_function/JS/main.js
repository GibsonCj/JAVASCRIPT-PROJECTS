var X = 50 //Global variable
function numbers1() { //Functions that use the global variable
    document.write(20 + X + "<br>");
}
function numbers2() {
    document.write(X + 200 + "<br>");
}
numbers1();
numbers2();

function numbers3() { //Function that uses a local variable
    var Y = 100;
    document.write(Y + 20 + "<br>");
}
function numbers4() { //Function that tries to use a local variable outside of its view
    document.write(Y + 40 + "<br>");
}
numbers3();
numbers4();

function numbers5() { //Function that uses a local variable and outputs it to the console
    var Z = 100;
    console.log(Z + 20 + "<br>");
}
function numbers6() { //Function that tries to use a local variable outside of its view and outputs it to the console
    console.log(Z + 40 + "<br>");
}
numbers5();
numbers6();

function get_Date() { //Function that uses an if statement to display a message based on the time of day
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function age_Function() { //Function that uses an if/else statement to display a message based on the user's age
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old").innerHTML = Vote;
}

function time_Function() { //Function that uses an else:if statement within an if statement to provide 3 different outputs based on the time of day
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}