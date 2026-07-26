import { searchCity } from "./api.js";
import { getSearchInput, getSearchButton, renderResults } from "./ui.js";
const searchInput = getSearchInput();
const searchButton = getSearchButton();
searchButton.addEventListener("click", async () => {
    const term = searchInput.value.trim();
    if (term.length < 2)
        return;
    const results = await searchCity(term);
    renderResults(results);
    searchInput.value = "";
});
//# sourceMappingURL=main.js.map