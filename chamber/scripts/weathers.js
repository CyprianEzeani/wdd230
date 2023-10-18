// Select HTML elements in the document
const currentTemp = document.getElementById('current-temp');
const weatherCondition = document.getElementById('weather-condition');
const weatherIcon = document.getElementById('weather-icon');

const latitude = -26.0167; // Latitude of Johannesburg, South Africa
const longitude = 28.1274; // Longitude of Johannesburg, South Africa
const apiKey = 'd1ea85587ae1553b1e82d99fdef44216'; // Replace with your actual API key
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Testing only
            displayResults(data); // Call the displayResults function
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Function to display weather data in HTML
function displayResults(data) {
    currentTemp.textContent = `${data.main.temp}°F`;
    weatherCondition.textContent = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconUrl);
}

apiFetch(); // Call the API fetch function
