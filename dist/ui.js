import { getSearchHistory } from "./storage.js";
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
        item.textContent = `${city.name}, ${city.country} | ${city.latitude}, ${city.longitude}`;
        item.addEventListener("click", () => onSelect(city));
        list.appendChild(item);
    });
}
export function clearSuggestions() {
    getSuggestionsList().innerHTML = "";
}
export function renderWeather(weather) {
    const weatherBox = document.querySelector(".weather-box");
    const cityName = document.querySelector(".city-name");
    const cityTemperature = document.querySelector(".city-temperature");
    const cityDescription = document.querySelector(".city-description");
    const cityAirQuality = document.querySelector(".city-air-quality");
    const cityAirQualityIndex = document.querySelector(".city-air-quality-index");
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
    history.forEach((cityName) => {
        const item = document.createElement("li");
        item.textContent = cityName;
        item.addEventListener("click", () => onSelect(cityName));
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