// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define API URL with your API key and coordinates
const apiKey = 'e5ebe8a0797e67b19f0e019049a15861'; // Replace 'your_api_key_here' with your actual API key
const latitude = '49.75';
const longitude = '6.64';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

// Define asynchronous function to fetch data from the API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output data to the console for testing
      displayResults(data); // Call the displayResults function with the fetched data
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error); // Output any errors to the console
  }
}

// Function to display fetched data on the HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconUrl);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

// Call the apiFetch function to initiate the API request
apiFetch();
