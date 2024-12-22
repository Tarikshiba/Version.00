// Charger les données utilisateur
Telegram.WebApp.ready();
const user = Telegram.WebApp.initDataUnsafe.user || { first_name: "Utilisateur" };

// Afficher le message de bienvenue avec une animation
const welcomeMessage = document.getElementById("welcome-message");
const userName = document.getElementById("user-name");
userName.textContent = user.first_name;

setTimeout(() => {
  welcomeMessage.style.display = "block";
  welcomeMessage.classList.add("animate");
}, 1000); // Affiche le message après 1 seconde

// Afficher le bouton "ENTRER" après 5 secondes
const enterBtn = document.getElementById("enter-btn");
setTimeout(() => {
  enterBtn.classList.remove("hidden");
}, 5000); // Bouton visible après 5 secondes

// Gestion du clic sur le bouton "ENTRER"
enterBtn.addEventListener("click", () => {
  window.location.href = "accueil.html"; // Redirige vers la page d'accueil
});
