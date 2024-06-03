const apiKey = 'd65f03efd0b764d01b9a367d4f14db93';
const city = 'Raymore';
const state = 'MO';
const country = 'US';
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');
const currentTemp = document.getElementById('current-temp');

const fetchWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=38.80&lon=-94.45&appid=d65f03efd0b764d01b9a367d4f14db93`);
        if (response.ok) {
            const data = await response.json();
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            weatherIcon.src = icon;
            weatherDesc.textContent = description;
            currentTemp.textContent = `${temp}°F`;
        } else {
            console.error('Error fetching weather data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

fetchWeather();