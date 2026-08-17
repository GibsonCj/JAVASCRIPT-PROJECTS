function countdown() { //Main funtion for a countdown timer to be displayed on the page
    var seconds = document.getElementById("seconds").value;

    function tick() { //Function to decrease the seconds provided by 1 every second and update the timer display accordingly before then wiping it once the time reaches 0
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //variable to set the timer to tick every 1000 milliseconds (1 second)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1; //Variable to keep track of the current slide being displayed
showSlides(slideIndex)

function plusSlides(n) { //Function to move to the next or previous slide
    showSlides(slideIndex += n)
}

function currentSlide(n) { //Function used to indicate which slide is currently being displayed on the dots below the slideshow 
    showSlides(slideIndex = n)
}

function showSlides(n) { //Function to display the current slide and hide the others, as well as update the dots to indicate which slide is currently being displayed
    let i;
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")
    if (n > slides.length) {slideIndex = 1} //If the current slide index is greater than the total number of slides, reset it to 1
    if (n < 1) {slideIndex = slides.length}  //if trying to go to a previous slide while at slide 1, reset it to the last slide in the index
    for (i = 0; i < slides.length; i++) {  //Loop through all the slides and hide them when they are not the current slide being displayed
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) { //Loop through all the dots and remove the "active" class from them when they are not the current slide being displayed
        dots[i].className = dots[i].className.replace(" active", "")
    }
    slides[slideIndex-1].style.display = "block"; //Display the current slide based on the slide index
    dots[slideIndex-1].className += " active"; //Update the dot corresponding to the current slide to indicate that it is active
}