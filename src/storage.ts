export interface HistoryEntry {
    name: string;
    country: string;
}

const STORAGE_KEY = "search-history";
const MAX_HISTORY = 5;

export function getSearchHistory(): HistoryEntry[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export function addToSearchHistory(entry: HistoryEntry): void {
    let history = getSearchHistory();

    history = history.filter((item) => item.name !== entry.name);
    history.unshift(entry);
    history = history.slice(0, MAX_HISTORY);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function clearSearchHistory(): void {
    localStorage.removeItem(STORAGE_KEY);
}