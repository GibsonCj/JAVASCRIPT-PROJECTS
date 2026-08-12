function myDictionary() { // Creates a dictionary object that is assigned the company variable, then details the company name alongside the gaming console they produce.
    var Company = {
        Microsoft: "Xbox",
        Sony: "PlayStation",
        Nintendo: "Switch",
    };
    delete Company.Microsoft; // Deletes the Microsoft Key Value Pair from the dictionary object.
    document.getElementById("Dictionary").innerHTML = Company.Microsoft; // Attempts to display the value of the Microsoft key, which has been deleted, resulting in an undefined output.
}