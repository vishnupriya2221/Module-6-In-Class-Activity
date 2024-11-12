// Function to change the button color on click
document.getElementById("colorButton").addEventListener("click", function() {
    var button = document.getElementById("colorButton");

    // Generate random colors
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    // Change button color
    button.style.backgroundColor = randomColor;
});

// Function to validate input field and show an alert
document.getElementById("submitButton").addEventListener("click", function() {
    var inputText = document.getElementById("textInput").value;

    // If-Else condition to check if the input field is empty
    if (inputText.trim() === "") {
        alert("Please enter some text!"); // Alert if input is empty
    } else {
        alert("You submitted: " + inputText); // Alert with the submitted input
    }
});
