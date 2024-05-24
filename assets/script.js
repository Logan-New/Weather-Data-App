const apiKey = '18901d219b58f26d7e1c76fef7a8a8d1';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

// Function to fetch weather data
async function fetchWeather(city) {
    const url = `${baseUrl}weather?q=${city}&units=imperial&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to fetch forecast data
async function fetchForecast(city) {
    const url = `${baseUrl}forecast?q=${city}&units=imperial&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
}

// Function to display current weather
function displayCurrentWeather(weatherData) {
    const currentWeatherContainer = document.getElementById('currentWeather');
    currentWeatherContainer.innerHTML = `
        <h2>Current Weather</h2>
        <div>City: ${weatherData.name}</div>
        <div>Temperature: ${weatherData.main.temp} °F</div>
        <div>Humidity: ${weatherData.main.humidity}%</div>
        <div>Wind Speed: ${weatherData.wind.speed} mph</div>
    `;
}

// Function to display forecast
function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = `
        <h2>5-Day Forecast</h2>
        <div class="forecast-items">
            ${forecastData.list.slice(0, 5).map(item => `
                <div class="forecast-item">
                    <div>Date: ${item.dt_txt}</div>
                    <div>Temperature: ${item.main.temp} °F</div>
                    <div>Humidity: ${item.main.humidity}%</div>
                    <div>Wind Speed: ${item.wind.speed} mph</div>
                </div>
            `).join('')}
        </div>
    `;
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    if (city === '') return;

    // Check if the city already exists in the search history
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!searchHistory.includes(city)) {
        searchHistory.push(city);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        addCityToSearchHistory(city);
    }

    const weatherData = await fetchWeather(city);
    if (weatherData) {
        displayCurrentWeather(weatherData);
        const forecastData = await fetchForecast(city);
        if (forecastData) {
            displayForecast(forecastData);
        }
    }
    cityInput.value = '';
}

// Function to add a city to the search history list
function addCityToSearchHistory(city) {
    const searchHistoryList = document.getElementById('searchHistoryList');
    const listItem = document.createElement('li');
    listItem.textContent = city;
    listItem.addEventListener('click', () => {
        document.getElementById('cityInput').value = city;
        document.getElementById('cityForm').dispatchEvent(new Event('submit'));
    });
    searchHistoryList.appendChild(listItem);
}

// Function to load search history from local storage
function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistoryList = document.getElementById('searchHistoryList');
    searchHistoryList.innerHTML = ''; // Clear existing list
    searchHistory.forEach(city => {
        addCityToSearchHistory(city);
    });
}

// Add event listener for form submission
const cityForm = document.getElementById('cityForm');
cityForm.addEventListener('submit', handleFormSubmit);

// Load search history on page load
window.addEventListener('load', loadSearchHistory);
