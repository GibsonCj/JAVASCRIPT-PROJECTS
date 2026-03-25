function myFunction() { //This line creates a function called myFunction
    var sentance = "I am learning"; //This line creates a variable called sentance and assigns it the string "I am learning"
    sentance += " how to concatenate more!"; //This line adds the string " how to concatenate more!" to the end of the sentance variable
    document.getElementById("concatente").innerHTML = sentance; //This line finds the HTML element with the id "concatente" and changes its innerHTML to the value of the sentance variable that was previously created and then concatenated
}