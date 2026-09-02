import { normalizePlaces } from "../data/normalizers";

export async function searchPlaces(query) {
  // On vérifie si la recherche est une chaîne de caractères.
  if (typeof query !== "string") {
    throw new TypeError("La recherche doit être une chaîne de caractères.");
  }

  // On nettoie la recherche pour éviter les espaces inutiles.
  const cleanedQuery = query.trim();
  // On vérifie si la recherche est vide.
  if (!cleanedQuery) {
    throw new Error("La recherche ne peut pas être vide.");
  }

  // On construit l'URL de l'API.
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search?");
  url.searchParams.set("name", cleanedQuery);
  url.searchParams.set("count", "5");
  url.searchParams.set("language", "fr");

  try {
    const response = await fetch(url);
    // On vérifie si la réponse est OK.
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    // On récupère les résultats.
    const result = await response.json();
    if (result.results === undefined) {
      return [];
    }
    // On normalise les résultats.
    return normalizePlaces(result.results);
  } catch (error) {
    throw new Error(error.message);
  }
}
