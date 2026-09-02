// Normalisation des réponses brutes des API.
export function normalizePlaces(places) {
  return places.map((place) => ({
    id: place.id,
    name: place.name,
    region: place.admin1,
    country: place.country,
    latitude: place.latitude,
    longitude: place.longitude,
  }));
}
