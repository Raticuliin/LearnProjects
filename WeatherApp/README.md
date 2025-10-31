# Proyecto: Buscador de Clima

**Nivel:** Muy Fácil

## Tecnologías

- HTML
- CSS
- JavaScript
- API REST

## Características

- Buscar clima por ciudad
- Mostrar temperatura actual, humedad y condiciones
- Iconos dinámicos según el clima
- Diseño responsive

## Learning

### Respuesta obtenida de la API

```json
{
  // Coordenadas de la ubicación
  "coord": {
    "lon": 7.367,
    "lat": 45.133
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      // LO QUIERO
      "description": "moderate rain",
      // LO QUIERO
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    // LO QUIERO
    "temp": 284.2,
    "feels_like": 282.93,
    "temp_min": 283.06,
    "temp_max": 286.82,
    "pressure": 1021,
    "humidity": 60,
    "sea_level": 1021,
    "grnd_level": 910
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.09,
    "deg": 121,
    "gust": 3.47
  },
  "rain": {
    "1h": 2.73
  },
  "clouds": {
    "all": 83
  },
  "dt": 1726660758,
  "sys": {
    "type": 1,
    "id": 6736,
    "country": "IT",
    "sunrise": 1726636384,
    "sunset": 1726680975
  },
  "timezone": 7200,
  "id": 3165523,
  "name": "Province of Turin",
  "cod": 200
}
```
