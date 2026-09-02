// Point d'entrée de l'application : orchestre les événements utilisateur.

// Importation des styles
import "./scss/main.scss";

// Importation des fonctions
import { searchPlaces } from "./api/geocoding";

// Intercepter le formulaire
const form = document.querySelector(".search__form");

// Intercepter les boutons des villes
const placesButtons = document.querySelectorAll(".city-name");

// Fonction pour récupérer la valeur de l'input
export function getInputValue() {
  const searchInput = document.getElementById("search-input");
  return searchInput.value;
}

// Écouter le formulaire
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const inputValue = getInputValue();
  const places = await searchPlaces(inputValue);
  console.log(places);
});
