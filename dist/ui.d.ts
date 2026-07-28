import type { CitySearchResult, Weather } from "./api.js";
export declare function getSearchInput(): HTMLInputElement;
export declare function getSuggestionsList(): HTMLUListElement;
export declare function renderSuggestions(results: CitySearchResult[], onSelect: (city: CitySearchResult) => void): void;
export declare function clearSuggestions(): void;
export declare function renderWeather(weather: Weather): void;
export declare function getHistoryList(): HTMLUListElement;
export declare function renderHistory(onSelect: (cityName: string) => void): void;
export declare function showHistory(): void;
export declare function hideHistory(): void;
//# sourceMappingURL=ui.d.ts.map