/* ==========================================================================
   JALO GROUP - Theme Manager (Light & Dark Theme)
   Solid enterprise surfaces. NO GRADIENTS.
   LocalStorage persistence & instant CSS variable switching.
   ========================================================================== */

const THEME_STORAGE_KEY = 'jalo_group_theme';

export class ThemeManager {
  constructor() {
    // Default to light theme for crisp corporate enterprise clarity
    this.currentTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.bindEvents();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(nextTheme);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update Theme Toggle Buttons
    const toggles = document.querySelectorAll('.btn-theme-toggle');
    toggles.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fa-solid fa-sun';
          btn.setAttribute('title', 'Switch to Light Theme');
        } else {
          icon.className = 'fa-solid fa-moon';
          btn.setAttribute('title', 'Switch to Dark Theme');
        }
      }
    });

    window.dispatchEvent(new CustomEvent('jalo:themeChanged', {
      detail: { theme }
    }));
  }

  bindEvents() {
    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.btn-theme-toggle');
      if (toggleBtn) {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }
}

export const themeManager = new ThemeManager();
