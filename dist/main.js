import { searchCity } from "./api.js";
import { getSearchInput, renderSuggestions, clearSuggestions } from "./ui.js";
const searchInput = getSearchInput();
let timeoutId;
searchInput.addEventListener("input", () => {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(async () => {
        const term = searchInput.value.trim();
        if (term.length < 2) {
            clearSuggestions();
            return;
        }
        const results = await searchCity(term);
        renderSuggestions(results, (city) => {
            searchInput.value = city.name;
            clearSuggestions();
            console.log("Wybrano:", city);
        });
    }, 300);
});
const form = document.querySelector("form");
form.addEventListener("submit", (event) => event.preventDefault());
//# sourceMappingURL=main.js.map