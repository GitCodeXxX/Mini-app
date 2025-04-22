const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById('user').textContent = tg.initDataUnsafe.user
  ? `Hallo, ${tg.initDataUnsafe.user.first_name}!`
  : "Willkommen!";

new QRCode(document.getElementById("ton-qr"), {
  text: "UQClU3sQhZt65-lhH7fjvCkeIX686hItWtNE1pfWDXDpagQO",
  width: 160,
  height: 160
});

new QRCode(document.getElementById("btc-qr"), {
  text: "1A9dtx4ykVUU7xBjBZWhmQfU8d8oeM8UGm",
  width: 160,
  height: 160
});

const translations = {
  de: {
    title: "Dein Wallet",
    send: "Senden",
    receive: "Empfangen"
  },
  en: {
    title: "Your Wallet",
    send: "Send",
    receive: "Receive"
  }
};

const languageSelector = document.getElementById("language");
languageSelector.addEventListener("change", () => {
  setLanguage(languageSelector.value);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

// Set default language
setLanguage("de");
