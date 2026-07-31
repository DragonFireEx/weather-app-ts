import { getSearchHistory } from "./storage.js";
import { getWeatherIconPath } from "./api.js";
export function getSearchInput() {
    return document.getElementById("search-term");
}
export function getSuggestionsList() {
    return document.querySelector(".search-suggestion");
}
export function renderSuggestions(results, onSelect) {
    const list = getSuggestionsList();
    list.innerHTML = "";
    results.forEach((city) => {
        const item = document.createElement("li");
        const nameNode = document.createTextNode(city.name + " ");
        const countrySpan = document.createElement("span");
        countrySpan.className = "country";
        countrySpan.textContent = city.country;
        item.appendChild(nameNode);
        item.appendChild(countrySpan);
        item.addEventListener("click", () => onSelect(city));
        list.appendChild(item);
    });
}
export function clearSuggestions() {
    getSuggestionsList().innerHTML = "";
}
export function renderWeather(weather) {
    const weatherBox = document.querySelector(".weather-box");
    const cityIcon = document.querySelector(".city-icon");
    const cityName = document.querySelector(".city-name");
    const cityTemperature = document.querySelector(".city-temperature");
    const cityDescription = document.querySelector(".city-description");
    const cityAirQuality = document.querySelector(".city-air-quality");
    const cityAirQualityIndex = document.querySelector(".city-air-quality-index");
    cityIcon.src = getWeatherIconPath(weather.weatherCode);
    cityName.textContent = weather.city;
    cityTemperature.textContent = `${weather.temperature}°C — ${weather.temperatureDescription}`;
    cityDescription.textContent = weather.weatherDescription;
    cityAirQuality.textContent = weather.airQualityDescription;
    cityAirQualityIndex.textContent = String(weather.airQualityIndex);
    cityAirQualityIndex.setAttribute("data-value", String(weather.airQualityIndex));
    weatherBox.hidden = false;
}
export function getHistoryList() {
    return document.querySelector(".search-history");
}
export function renderHistory(onSelect) {
    const list = getHistoryList();
    const history = getSearchHistory();
    list.innerHTML = "";
    history.forEach((entry) => {
        const item = document.createElement("li");
        const nameSpan = document.createTextNode(entry.name + " ");
        const countrySpan = document.createElement("span");
        countrySpan.className = "country";
        countrySpan.textContent = entry.country;
        item.appendChild(nameSpan);
        item.appendChild(countrySpan);
        item.addEventListener("click", () => onSelect(entry.name));
        list.appendChild(item);
    });
}
export function showHistory() {
    getHistoryList().hidden = false;
}
export function hideHistory() {
    getHistoryList().hidden = true;
}
//# sourceMappingURL=ui.js.map