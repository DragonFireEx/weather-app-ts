import type { CitySearchResult, Weather } from "./api.js";
export declare function getSearchInput(): HTMLInputElement;
export declare function getSuggestionsList(): HTMLUListElement;
export declare function renderSuggestions(results: CitySearchResult[], onSelect: (city: CitySearchResult) => void): void;
export declare function clearSuggestions(): void;
export declare function renderWeather(weather: Weather): void;
//# sourceMappingURL=ui.d.ts.map