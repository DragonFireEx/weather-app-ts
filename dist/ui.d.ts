import type { CitySearchResult } from "./api.js";
export declare function getSearchInput(): HTMLInputElement;
export declare function getSearchButton(): HTMLButtonElement;
export declare function renderResults(results: CitySearchResult[]): void;
export declare function getSuggestionsList(): HTMLUListElement;
export declare function renderSuggestions(results: CitySearchResult[], onSelect: (city: CitySearchResult) => void): void;
export declare function clearSuggestions(): void;
//# sourceMappingURL=ui.d.ts.map