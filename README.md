Weather Dashboard
Description
This project is a weather dashboard application that allows users to search for and view weather conditions for multiple cities. The dashboard dynamically updates the HTML and CSS to present current and future weather conditions based on the user's search. The application retrieves weather data from the OpenWeather 5 Day Weather Forecast API.

User Story
As a traveler, I want to see the weather outlook for multiple cities so that I can plan a trip accordingly.

Acceptance Criteria
Search for a City
When I search for a city, I am presented with current and future conditions for that city, and that city is added to the search history.
View Current Weather Conditions
When I view current weather conditions for a city, I am presented with:
City name
Date
Icon representation of weather conditions
Temperature
Humidity
Wind speed
View Future Weather Conditions
When I view future weather conditions for a city, I am presented with a 5-day forecast that displays:
Date
Icon representation of weather conditions
Temperature
Wind speed
Humidity
Search History
When I click on a city in the search history, I am again presented with current and future conditions for that city.
Getting Started
Prerequisites
A web browser
An active internet connection
OpenWeather API Key
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-dashboard.git
Open the project directory:

bash
Copy code
cd weather-dashboard
Open index.html in your preferred web browser.

Usage
API Key Setup

Register for an API key on the OpenWeather website.
Replace YOUR_API_KEY in the script with your actual API key.
Searching for a City

Enter the name of a city in the search input field and click the search button.
The application will display current and future weather conditions for the entered city.
The city will be added to the search history.
Viewing Weather Conditions

The current weather conditions include the city name, date, weather icon, temperature, humidity, and wind speed.
The 5-day forecast includes the date, weather icon, temperature, wind speed, and humidity for each day.
Search History

Click on any city in the search history to view its weather conditions again.
Local Storage
The application uses localStorage to store the search history, ensuring that the user's search history is retained even after the page is refreshed.
Technologies Used
HTML
CSS
JavaScript
OpenWeather 5 Day Weather Forecast API
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
OpenWeather for providing the weather data API
Full-Stack Blog on how to use API keys for guidance on working with APIs