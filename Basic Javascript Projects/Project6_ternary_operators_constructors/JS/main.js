function rideFunction() { //This function uses a ternary operator to determine if the user is tall enough to ride a roller coaster when the assigned height is 52 centimeters.
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) { //This function is a constructor that creates a new object with the properties of Make, Model, Year, and Color.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //These variables are instances of the above constructor function, with each providing different information to be used.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction1() { //This function uses the constructor above to display info from one of the variables provided.
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function GamingConsole(Company, Console, Year) { //This function is a constructor that creates a new object with the properties of Company, Console, and Year.
    this.Console_Company = Company;
    this.Console_Name = Console;
    this.Console_Year = Year;
}

var PS5 = new GamingConsole("Sony", "PlayStation 5", 2020); //These variables are instances of the above constructor function, with each providing different information to be used.
var Xbox = new GamingConsole("Microsoft", "Xbox Series X", 2020);
var Switch = new GamingConsole("Nintendo", "Switch", 2017);

function myFunction2() { //This function uses the constructor above to display info from one of the variables provided.
    document.getElementById("New_and_This").innerHTML =
    "The " + PS5.Console_Name + " was created by " + PS5.Console_Company + " and was released in " + PS5.Console_Year;
}

function myFunction3() { //This function uses a nested function to increase a variable by 1 and display the result.
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}