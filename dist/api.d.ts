export interface CitySearchResult {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
}
export declare function searchCity(query: string): Promise<CitySearchResult[]>;
export interface Weather {
    city: string;
    temperature: number;
    temperatureDescription: string;
    weatherCode: number;
    weatherDescription: string;
    airQualityIndex: number;
    airQualityDescription: string;
}
export declare function getWeather(cityName: string, latitude: number, longitude: number): Promise<Weather>;
//# sourceMappingURL=api.d.ts.map