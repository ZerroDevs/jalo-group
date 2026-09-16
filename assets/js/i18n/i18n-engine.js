/* ==========================================================================
   JALO GROUP - Internationalization (i18n) Engine
   English Primary (LTR) / Arabic Toggle (RTL)
   Dynamic live DOM updates & LocalStorage persistence
   ========================================================================== */

import { en } from './en.js';
import { ar } from './ar.js';

const STORAGE_KEY = 'jalo_group_lang';
const DEFAULT_LANG = 'en';

const dictionaries = { en, ar };

export class I18nEngine {
  constructor() {
    this.currentLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (!dictionaries[lang]) return;
    this.currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    this.applyLanguage(lang);
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(nextLang);
  }

  t(key, lang = this.currentLang) {
    const dict = dictionaries[lang] || dictionaries[DEFAULT_LANG];
    return dict[key] || key;
  }

  applyLanguage(lang) {
    const isRtl = lang === 'ar';
    const htmlEl = document.documentElement;

    // Update document attributes
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // Update all text nodes with data-i18n
    const translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key, lang);
      if (text && text !== key) {
        if (text.includes('<') && text.includes('>')) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update input placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key, lang);
      if (text) {
        el.setAttribute('placeholder', text);
      }
    });

    // Update title attributes
    const titled = document.querySelectorAll('[data-i18n-title]');
    titled.forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key, lang);
      if (text) {
        el.setAttribute('title', text);
      }
    });

    // Update Language Toggle Button Labels
    const langToggles = document.querySelectorAll('.btn-lang-toggle');
    langToggles.forEach((btn) => {
      const labelSpan = btn.querySelector('.lang-label');
      if (labelSpan) {
        labelSpan.textContent = lang === 'en' ? 'عربي' : 'English';
      }
      btn.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    });

    // Dispatch global custom event
    window.dispatchEvent(new CustomEvent('jalo:languageChanged', {
      detail: { lang, isRtl }
    }));
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.btn-lang-toggle');
      if (toggleBtn) {
        e.preventDefault();
        this.toggleLanguage();
      }
    });
  }
}

export const i18n = new I18nEngine();
