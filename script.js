// Charger les données utilisateur Telegram
const user = Telegram.WebApp.initDataUnsafe.user;
if (user) {
  const container = document.querySelector('.container');
  const welcomeMessage = document.createElement('p');
  welcomeMessage.textContent = `Bienvenue, ${user.first_name} !`;

  container.appendChild(welcomeMessage);
}

// Adapter les couleurs au thème Telegram
const theme = Telegram.WebApp.colorScheme; // light ou dark
if (theme === "dark") {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
} else {
  document.body.style.backgroundColor = "#f4f4f9";
  document.body.style.color = "#333";
}

// Ajouter un bouton principal pour le partage
Telegram.WebApp.MainButton.text = "Partager";
Telegram.WebApp.MainButton.show();
Telegram.WebApp.MainButton.onClick(() => {
  Telegram.WebApp.share();
});

// Indiquer que l'application est prête
Telegram.WebApp.ready();

// Interaction pour fermer l'application
document.getElementById("closeApp").addEventListener("click", function () {
  Telegram.WebApp.close();
});
