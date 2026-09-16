/* ==========================================================================
   JALO GROUP for Oil & Gas Services - Main Application Entrypoint
   ES Modules Orchestration
   ========================================================================== */

import { i18n } from './i18n/i18n-engine.js';
import { themeManager } from './modules/theme.js';
import { navigationManager } from './modules/navigation.js';
import { quoteModalManager } from './modules/quote-modal.js';
import { projectsManager } from './modules/projects.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Jalo Group Enterprise System Initialized.');
});

export {
  i18n,
  themeManager,
  navigationManager,
  quoteModalManager,
  projectsManager
};
