const STORAGE_KEY = "search-history";
const MAX_HISTORY = 5;
export function getSearchHistory() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}
export function addToSearchHistory(entry) {
    let history = getSearchHistory();
    history = history.filter((item) => item.name !== entry.name);
    history.unshift(entry);
    history = history.slice(0, MAX_HISTORY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}
export function clearSearchHistory() {
    localStorage.removeItem(STORAGE_KEY);
}
//# sourceMappingURL=storage.js.map