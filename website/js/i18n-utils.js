/*!
* SAGE Edu - v1.2 
* Copyright 2025-2026 Familia Pequenino Capingala - FPC
* Developer Zacarias Capingala - zacariasjuliano@gmail.com
* Licensed under MIT (https://github.com/zacariasjuliano/sage-edu/blob/main/LICENSE)
*/


// Função para traduzir URLs amigáveis (SEO)
function getLocalizedUrl(path, targetLang) {
    const currentLang = window.i18n ? window.i18n.currentLang : 'pt';
    if (currentLang === targetLang) return path;
    
    // Adicione aqui suas regras de roteamento internacionalizado
    const urlMappings = {
        '/sobre': {
            pt: '/sobre',
            en: '/about',
            fr: '/a-propos',
            es: '/acerca-de'
        },
        '/contato': {
            pt: '/contato',
            en: '/contact',
            fr: '/contact',
            es: '/contacto'
        }
    };
    
    return urlMappings[path]?.[targetLang] || path;
}

// Função para detectar idioma do navegador
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const supportedLangs = ['pt', 'en', 'fr', 'es'];
    const langCode = browserLang.split('-')[0];
    
    return supportedLangs.includes(langCode) ? langCode : 'pt';
}

// Função para formatar datas conforme o idioma
function formatDate(date, lang) {
    return new Date(date).toLocaleDateString(lang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Função para formatar números (moeda, percentuais, etc)
function formatNumber(number, lang, options = {}) {
    return new Intl.NumberFormat(lang, options).format(number);
}

// Exemplo de uso:
// formatNumber(1234.56, 'pt', { style: 'currency', currency: 'AOA' })
// formatNumber(0.75, 'en', { style: 'percent' })

// Exportar funções
window.i18nUtils = {
    getLocalizedUrl,
    detectBrowserLanguage,
    formatDate,
    formatNumber
};