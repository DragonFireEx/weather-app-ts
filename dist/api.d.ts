export interface CitySearchResult {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
}
export declare function searchCity(query: string): Promise<CitySearchResult[]>;
//# sourceMappingURL=api.d.ts.map