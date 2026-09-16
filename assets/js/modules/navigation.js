/* ==========================================================================
   JALO GROUP - Navigation & Header Interaction
   Sticky header, Active link detection, Mobile drawer
   ========================================================================== */

export class NavigationManager {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.mobileDrawer = document.getElementById('mobileDrawer');
    this.mobileOverlay = document.getElementById('mobileOverlay');
    this.mobileToggle = document.getElementById('mobileMenuToggle');
    this.drawerClose = document.getElementById('drawerCloseBtn');
    
    this.init();
  }

  init() {
    this.handleScroll();
    this.highlightActiveLink();
    this.bindEvents();
  }

  handleScroll() {
    if (!this.header) return;
    const onScroll = () => {
      if (window.scrollY > 20) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
    
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;
      const targetPage = href.split('/').pop();
      
      if (targetPage === currentPath || (currentPath === '' && targetPage === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  openDrawer() {
    if (this.mobileDrawer && this.mobileOverlay) {
      this.mobileDrawer.classList.add('active');
      this.mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeDrawer() {
    if (this.mobileDrawer && this.mobileOverlay) {
      this.mobileDrawer.classList.remove('active');
      this.mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  bindEvents() {
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.openDrawer());
    }

    if (this.drawerClose) {
      this.drawerClose.addEventListener('click', () => this.closeDrawer());
    }

    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => this.closeDrawer());
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDrawer();
      }
    });

    // Close drawer when link clicked
    document.querySelectorAll('.drawer-link').forEach((link) => {
      link.addEventListener('click', () => this.closeDrawer());
    });
  }
}

export const navigationManager = new NavigationManager();
