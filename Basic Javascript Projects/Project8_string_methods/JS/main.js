function full_Sentance() { //Function that uses the concatenate string method to create a sentance
    var part_1 = "I have ";
    var part_2 = "created a sentance that is ";
    var part_3 = "created by using ";
    var part_4 = "the concatenate string method.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //Function that uses the slice method to display a section of a sentance
    var Sentence = "This is a test sentance for the slice method.";
    var Section = Sentence.slice(32, 37);
    document.getElementById("slice").innerHTML = Section;
}

function upper_Case() { //Function that uses the toUpperCase method to display a sentance in all upper case letters
    var str = "This is a test sentance for the toUpperCase method.";
    var res = str.toUpperCase();
    document.getElementById("toUpperCase").innerHTML = res;
}

function search_Method() { //Function that uses the search method to find the position of a word in a sentance
    var str = "Mr. Blue has a blue house.";
    var pos = str.search("blue");
    document.getElementById("search").innerHTML = pos;
}

function Numbers_to_string() { //Function that uses the toString method to convert a number to a string
    var num = 123;
    document.getElementById("Numbers_to_string").innerHTML = num.toString();
}

function precision_Method() { //Function that uses the toPrecision method to display a provided number with a specific number of digits from it.
    var num = 123.456789;
    document.getElementById("Precision").innerHTML = num.toPrecision(6);
}