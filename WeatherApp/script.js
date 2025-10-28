// Selectores del DOM
const $city = document.querySelector(".card__title");
const $temperature = document.querySelector(".card__temperature");
const $description = document.querySelector(".card__description");
const $weatherImage = document.querySelector(".card__image");

const url = `https://api.openweathermap.org/data/2.5/weather`;
const apiKey = "317b2942175eaff8bdec5ad146e34c17";

// Función para actualizar todos los datos del clima
function updateWeatherInfo(city, temperature, description, iconCode) {
    // Actualiza el título de la ciudad
    $city.textContent = city;
    // Actualiza la temperatura (añade el símbolo de grados)
    $temperature.textContent = `${temperature}º`;
    // Actualiza la descripción
    $description.textContent = description;
    // Actualiza el icono (usando la URL de OpenWeather)
    $weatherImage.src = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

async function getData(key = apiKey, city, lang) {
    const params = new URLSearchParams();

    params.append("appid", key);
    params.append("q", city);
    params.append("lang", lang);
    params.append("units", "metric");

    const getDataURL = `${url}?${params}`;

    try {
        console.log(url);

        const response = await fetch(getDataURL).then((response) =>
            response.json()
        );

        updateWeatherInfo(
            response.name,
            response.main.temp,
            response.weather[0].description,
            response.weather[0].icon
        );
    } catch (error) {
        console.error(error.message);
    }
}

// Ejemplo de uso:
updateWeatherInfo("Madrid", "22.5", "Soleado", "01d");

getData(apiKey, "bilbao", "es");
