// Indiquer que l'application est prête
Telegram.WebApp.ready();

// Interaction pour fermer l'application
document.getElementById("closeApp").addEventListener("click", function () {
  Telegram.WebApp.close();
});
