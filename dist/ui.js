export function getSearchInput() {
    return document.getElementById("search-term");
}
export function getSearchButton() {
    return document.getElementById("search-button");
}
export function renderResults(results) {
    console.log(results);
}
export function getSuggestionsList() {
    return document.querySelector(".search-suggestion");
}
export function renderSuggestions(results, onSelect) {
    const list = getSuggestionsList();
    list.innerHTML = "";
    results.forEach((city) => {
        const item = document.createElement("li");
        item.textContent = `${city.name}, ${city.country}`;
        item.addEventListener("click", () => onSelect(city));
        list.append(item);
    });
}
export function clearSuggestions() {
    getSuggestionsList().innerHTML = "";
}
//# sourceMappingURL=ui.js.map