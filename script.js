// PART 2 JAVASCRIPT FUNCTIONS SCOPE PARAMETERS 

function calculateArea() {
    // Get values as numbers
    const length = parseFloat(document.getElementById("length").value);
    const width = parseFloat(document.getElementById("width").value);

    // Check if values are valid numbers
    if (isNaN(length) || isNaN(width)) {
        return "Please enter valid numbers.";
    }

    return length * width;
}
// function to display area result on the reult field
function showArea() {
    const area = calculateArea();
    const resultField = document.getElementById("result");

    if (area === null) {
        resultField.value = "Enter valid numbers!";
    } else {
        resultField.value = area;
    }
    
}

//add eventlistener to calculate area after clicking the calculate button
document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById("calculate");
    if (calculateButton) {
        calculateButton.addEventListener("click", showArea);
    } else {
        console.error("Calculate button not found!");
    }
});


//Part 3: Combining CSS Animations with JavaScript

document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
});