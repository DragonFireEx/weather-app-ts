import { searchCity, getWeather } from "./api.js";
import { getSearchInput, renderSuggestions, clearSuggestions, renderWeather, renderHistory, showHistory, hideHistory, } from "./ui.js";
import { addToSearchHistory } from "./storage.js";
const searchInput = getSearchInput();
let timeoutId;
const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());
async function selectCity(cityName) {
    const results = await searchCity(cityName);
    if (results.length === 0)
        return;
    const city = results[0];
    if (!city)
        return;
    const weather = await getWeather(city.name, city.latitude, city.longitude);
    renderWeather(weather);
    addToSearchHistory(city.name);
    renderHistory(selectCity);
    searchInput.value = city.name;
    clearSuggestions();
    hideHistory();
}
renderHistory(selectCity);
searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length === 0) {
        showHistory();
    }
});
searchInput.addEventListener("blur", () => {
    setTimeout(() => {
        hideHistory();
    }, 150);
});
searchInput.addEventListener("input", () => {
    clearTimeout(timeoutId);
    const term = searchInput.value.trim();
    if (term.length > 0) {
        hideHistory();
    }
    else {
        showHistory();
    }
    timeoutId = window.setTimeout(async () => {
        if (term.length < 2) {
            clearSuggestions();
            return;
        }
        const results = await searchCity(term);
        renderSuggestions(results, async (city) => {
            await selectCity(city.name);
        });
    }, 300);
});
//# sourceMappingURL=main.js.map