import type { CitySearchResult } from "./api.js";

export function getSearchInput(): HTMLInputElement {
    return document.getElementById("search-term") as HTMLInputElement;
}

export function getSearchButton(): HTMLButtonElement {
    return document.getElementById("search-button") as HTMLButtonElement;
}

export function renderResults(results: CitySearchResult[]): void {
    console.log(results);
}

export function getSuggestionsList(): HTMLUListElement{
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
            item.textContent = `${city.name}, ${city.country}`;
            item.addEventListener("click", () => onSelect(city));
            list.append(item);
        });
    }

export function clearSuggestions(): void {
    getSuggestionsList().innerHTML = "";
}