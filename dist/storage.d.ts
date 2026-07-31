export interface HistoryEntry {
    name: string;
    country: string;
}
export declare function getSearchHistory(): HistoryEntry[];
export declare function addToSearchHistory(entry: HistoryEntry): void;
export declare function clearSearchHistory(): void;
//# sourceMappingURL=storage.d.ts.map