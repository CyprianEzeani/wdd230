// script.js

// Function to get the current date
function getDates() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

// Example of how to use the getDates function:
const currentDateElement = document.getElementById('current-date');
if (currentDateElement) {
    currentDateElement.textContent = getDates();
}