/*!
* SAGE Edu - v1.2 
* Copyright 2025-2026 Familia Pequenino Capingala - FPC
* Developer Zacarias Capingala - zacariasjuliano@gmail.com
* Licensed under MIT (https://github.com/zacariasjuliano/sage-edu/blob/main/LICENSE)
*/

let translations = {};
let currentLang = "pt";

async function loadLanguage(lang) {
    const response = await fetch(`./lang/${lang}.json`);
    translations = await response.json();
    currentLang = lang;

    applyTranslations();
    localStorage.setItem("language", lang);
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const keys = element.getAttribute("data-i18n").split(".");
        let value = translations;

        keys.forEach(key => {
            value = value[key];
        });

        if (value) {
            element.textContent = value;
        }
    });
}

document.getElementById("languageSwitcher")
    .addEventListener("change", (e) => {
        console.log(e.target.value);
        loadLanguage(e.target.value);
    });

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "pt";
    document.getElementById("languageSwitcher").value = savedLang;
    loadLanguage(savedLang);
});