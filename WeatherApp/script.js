// Selectores del DOM
const $city = document.querySelector(".card__title");
const $temperature = document.querySelector(".card__temperature");
const $description = document.querySelector(".card__description");
const $weatherImage = document.querySelector(".card__image");

const $searchForm = document.querySelector("#searchForm");
const $searchInput = document.querySelector("#searchInput");
const $serachButton = document.querySelector("#searchButton");

const url = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = "317b2942175eaff8bdec5ad146e34c17";

// Función para actualizar todos los datos del clima
function updateWeatherInfo(city, temperature, description, iconCode) {
    $city.textContent = city;
    $temperature.textContent = `${temperature}º`;
    $description.textContent = description;
    $weatherImage.src = `https://openweathermap.org/img/wn/${
        iconCode ? iconCode : "01d"
    }@4x.png`;
}

$searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = $searchInput.value;

    if (!city) {
        updateWeatherInfo("-", "-", "Introduce una ciudad", null);
        return;
    }

    getData(apiKey, city, "es");
});

async function getData(key = apiKey, city, lang) {
    const params = new URLSearchParams();

    params.append("appid", key);
    params.append("q", city);
    params.append("lang", lang);
    params.append("units", "metric");

    const getDataURL = `${url}?${params}`;

    try {
        const response = await fetch(getDataURL);
        const data = await response.json();

        if (data && data.cod === 200) {
            const name = data.name;
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const icon = data.weather[0].icon;

            updateWeatherInfo(name, temp, desc, icon);
        } else {
            updateWeatherInfo("-", "-", "No se encontró la ciudad", null);
        }
    } catch (error) {
        console.error(error.message);
    }
}

getData(apiKey, "Madrid", "es");
