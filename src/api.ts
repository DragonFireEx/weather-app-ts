export interface CitySearchResult {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
}

export async function searchCity(query: string): Promise<CitySearchResult[]> {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data.results) {
        return [];
    }

    return data.results.map((r: any) => ({
        name: r.name,
        country: r.country,
        latitude: r.latitude,
        longitude: r.longitude,
    }));
}

export interface Weather {
    city: string;
    temperature: number;
    temperatureDescription: string;
    weatherCode: number;
    weatherDescription: string;
    airQualityIndex: number;
    airQualityDescription: string;
}

const weatherCodes: Record<number, string> = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    95: "Thunderstorm",
};

function describeTemperature(temp: number): string {
    if (temp <= 0) return "Freezing";
    if (temp <= 10) return "Cold";
    if (temp <= 18) return "Cool";
    if (temp <= 24) return "Warm";
    return "Hot";
}

function describeAirQuality(aqi: number): string {
    if (aqi <= 20) return "Good";
    if (aqi <= 40) return "Fair";
    if (aqi <= 60) return "Moderate";
    if (aqi <= 80) return "Poor";
    if (aqi <= 100) return "Very Poor";
    return "Extremely Poor";
}

export async function getWeather(
    cityName: string,
    latitude: number,
    longitude: number
): Promise<Weather> {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const airQualityUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi`;

    const [weatherResponse, airQualityResponse] = await Promise.all([
        fetch(weatherUrl),
        fetch(airQualityUrl),
    ]);

    if (!weatherResponse.ok) {
        throw new Error(`Błąd pogody: ${weatherResponse.status}`);
    }
    if (!airQualityResponse.ok) {
        throw new Error(`Błąd jakości powietrza: ${airQualityResponse.status}`);
    }

    const weatherData = await weatherResponse.json();
    const airQualityData = await airQualityResponse.json();

    const temperature = weatherData.current_weather.temperature;
    const weatherCode = weatherData.current_weather.weathercode;
    const airQualityIndex = airQualityData.current.european_aqi;

    return {
        city: cityName,
        temperature,
        temperatureDescription: describeTemperature(temperature),
        weatherCode,
        weatherDescription: weatherCodes[weatherCode] ?? "Unknown",
        airQualityIndex,
        airQualityDescription: describeAirQuality(airQualityIndex),
    };
}