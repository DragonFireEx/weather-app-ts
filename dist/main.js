import { searchCity, getWeather } from "./api.js";
import { getSearchInput, renderSuggestions, clearSuggestions, renderWeather, } from "./ui.js";
const searchInput = getSearchInput();
let timeoutId;
const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());
searchInput.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(async () => {
        const term = searchInput.value.trim();
        if (term.length < 2) {
            clearSuggestions();
            return;
        }
        const results = await searchCity(term);
        renderSuggestions(results, async (city) => {
            searchInput.value = city.name;
            clearSuggestions();
            const weather = await getWeather(city.name, city.latitude, city.longitude);
            renderWeather(weather);
        });
    }, 300);
});
//# sourceMappingURL=main.js.map