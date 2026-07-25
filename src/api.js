async function searchCity(query) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Błąd HTTP: ${response.status}`);
    }
    const data = await response.json();
    if (!data.results) {
        return [];
    }
    return data.results.map((r) => ({
        name: r.name,
        country: r.country,
        latitude: r.latitude,
        longitude: r.longitude,
    }));
}
export {};
