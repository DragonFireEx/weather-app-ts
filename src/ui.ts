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