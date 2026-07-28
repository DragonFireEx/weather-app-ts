// storage.ts
const STORAGE_KEY = "search-history";
const MAX_HISTORY = 5;
export function getSearchHistory() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}
export function addToSearchHistory(cityName) {
    let history = getSearchHistory();
    history = history.filter((name) => name !== cityName);
    history.unshift(cityName);
    history = history.slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}
export function clearSearchHistory() {
    localStorage.removeItem(STORAGE_KEY);
}
//# sourceMappingURL=storage.js.map