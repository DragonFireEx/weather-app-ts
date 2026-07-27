import type { CitySearchResult, Weather } from "./api.js";

export function getSearchInput(): HTMLInputElement {
    return document.getElementById("search-term") as HTMLInputElement;
}

export function getSuggestionsList(): HTMLUListElement {
    return document.querySelector(".search-suggestion") as HTMLUListElement;
}

export function renderSuggestions(
    results: CitySearchResult[],
    onSelect: (city: CitySearchResult) => void
): void {
    const list = getSuggestionsList();
    list.innerHTML = "";

    results.forEach((city) => {
        const item = document.createElement("li");
        item.textContent = `${city.name}, ${city.country} | ${city.latitude}, ${city.longitude}`;
        item.addEventListener("click", () => onSelect(city));
        list.appendChild(item);
    });
}

export function clearSuggestions(): void {
    getSuggestionsList().innerHTML = "";
}

export function renderWeather(weather: Weather): void {
    const weatherBox = document.querySelector(".weather-box") as HTMLElement;
    const cityName = document.querySelector(".city-name") as HTMLElement;
    const cityTemperature = document.querySelector(".city-temperature") as HTMLElement;
    const cityDescription = document.querySelector(".city-description") as HTMLElement;
    const cityAirQuality = document.querySelector(".city-air-quality") as HTMLElement;
    const cityAirQualityIndex = document.querySelector(".city-air-quality-index") as HTMLElement;

    cityName.textContent = weather.city;
    cityTemperature.textContent = `${weather.temperature}°C — ${weather.temperatureDescription}`;
    cityDescription.textContent = weather.weatherDescription;
    cityAirQuality.textContent = weather.airQualityDescription;
    cityAirQualityIndex.textContent = String(weather.airQualityIndex);
    cityAirQualityIndex.setAttribute("data-value", String(weather.airQualityIndex));

    weatherBox.hidden = false;
}