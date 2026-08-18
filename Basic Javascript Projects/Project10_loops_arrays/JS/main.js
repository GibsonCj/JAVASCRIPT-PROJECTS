function callLoop() { //This function uses a while loop to count to 10
    let digit = "";
    let x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //This function uses a for loop to list all of the instruments provided one by one
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Instrument_Loop").innerHTML = Content;
}

function husky() { //This function chooses one action from an array to tell what action the dog is doing
    var Dog_Action = [];
    Dog_Action[1] = "sleeping";
    Dog_Action[2] = "playing";
    Dog_Action[3] = "eating";
    Dog_Action[4] = "panting";
    document.getElementById("Husky").innerHTML = "At this time, the husky is " + Dog_Action[4] + ".";
}

function constant_Function() { //This function uses a constant and provides it with multiple values before then editing one value and adding another, then using those values to finish the provided sentance
    let Musical_Instrument = {type:"guitar", brand:"Gibson", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}