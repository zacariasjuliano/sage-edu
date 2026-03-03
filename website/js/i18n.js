/*!
* SAGE Edu - v1.2 
* Copyright 2025-2026 Familia Pequenino Capingala - FPC
* Developer Zacarias Capingala - zacariasjuliano@gmail.com
* Licensed under MIT (https://github.com/zacariasjuliano/sage-edu/blob/main/LICENSE)
*/

class I18n {
    constructor() {
        this.translations = translations;
        this.currentLang = this.getSavedLanguage() || 'pt';
        this.supportedLanguages = ['pt', 'en', 'fr', 'es'];
        this.init();
    }

    init() {
        this.loadLanguage(this.currentLang);
        this.setupLanguageSwitcher();
        this.setupLanguageObserver();
    }

    getSavedLanguage() {
        return localStorage.getItem('sage-language');
    }

    saveLanguage(lang) {
        localStorage.setItem('sage-language', lang);
    }

    loadLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) {
            lang = 'pt';
        }

        this.currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key, lang);
            
            if (translation) {
                // Handle HTML content for elements that might contain HTML
                if (element.tagName === 'TITLE') {
                    element.textContent = translation;
                } else if (element.tagName === 'META' && element.hasAttribute('name') && element.getAttribute('name') === 'description') {
                    element.setAttribute('content', translation);
                } else {
                    // Check if translation contains HTML
                    if (translation.includes('<') && translation.includes('>')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                }
            }
        });

        // Update select options
        document.querySelectorAll('#languageSwitcher option').forEach(option => {
            const langCode = option.value;
            const translation = this.getTranslation(`lang.${langCode}`, lang);
            if (translation) {
                option.textContent = translation;
            }
        });

        // Update the select element to show current language
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            switcher.value = lang;
        }

        this.saveLanguage(lang);
        
        // Dispatch event for other scripts
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }

    getTranslation(key, lang) {
        const keys = key.split('.');
        let value = this.translations[lang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation missing for key: ${key} in language: ${lang}`);
                return null;
            }
        }
        
        return value;
    }

    setupLanguageSwitcher() {
        const switcher = document.getElementById('languageSwitcher');
        if (switcher) {
            switcher.addEventListener('change', (e) => {
                this.loadLanguage(e.target.value);
            });
        }
    }

    setupLanguageObserver() {
        // Observer for dynamically added content
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        if (node.hasAttribute && node.hasAttribute('data-i18n')) {
                            const key = node.getAttribute('data-i18n');
                            const translation = this.getTranslation(key, this.currentLang);
                            if (translation) {
                                if (translation.includes('<') && translation.includes('>')) {
                                    node.innerHTML = translation;
                                } else {
                                    node.textContent = translation;
                                }
                            }
                        }
                        
                        // Check children
                        node.querySelectorAll && node.querySelectorAll('[data-i18n]').forEach(child => {
                            const key = child.getAttribute('data-i18n');
                            const translation = this.getTranslation(key, this.currentLang);
                            if (translation) {
                                if (translation.includes('<') && translation.includes('>')) {
                                    child.innerHTML = translation;
                                } else {
                                    child.textContent = translation;
                                }
                            }
                        });
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.i18n = new I18n();
});