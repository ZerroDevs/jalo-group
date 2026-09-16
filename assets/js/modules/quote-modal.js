/* ==========================================================================
   JALO GROUP - Quote Modal & Technical Inquiry Engine
   Generates RFC mailto payload & provides clipboard fallback.
   ========================================================================== */

import { i18n } from '../i18n/i18n-engine.js';

export class QuoteModalManager {
  constructor() {
    this.modal = document.getElementById('quoteModal');
    this.form = document.getElementById('quoteForm');
    this.summaryPanel = document.getElementById('quoteSummaryPanel');
    this.summaryCode = document.getElementById('quoteSummaryCode');
    this.copyBtn = document.getElementById('btnCopyQuote');
    this.fileInput = document.getElementById('quoteFilesInput');
    this.fileBox = document.getElementById('quoteFileBox');
    this.fileText = document.getElementById('quoteFileText');

    this.init();
  }

  init() {
    this.bindTriggers();
    this.bindForm();
    this.bindFileInput();
  }

  open() {
    if (this.modal) {
      this.modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Hide previous summary if reopening
      if (this.summaryPanel) {
        this.summaryPanel.classList.remove('active');
      }
    }
  }

  close() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  bindTriggers() {
    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('.btn-open-quote, [data-open-modal="quote"]');
      if (openBtn) {
        e.preventDefault();
        // Pre-select service discipline if data-service attribute is present
        const serviceAttr = openBtn.getAttribute('data-service');
        if (serviceAttr && this.form) {
          const serviceSelect = this.form.querySelector('#quoteService');
          if (serviceSelect) {
            serviceSelect.value = serviceAttr;
          }
        }
        this.open();
      }

      const closeBtn = e.target.closest('#quoteModalCloseBtn, .modal-backdrop-close');
      if (closeBtn) {
        e.preventDefault();
        this.close();
      }
    });

    // Close on backdrop click
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  bindFileInput() {
    if (this.fileBox && this.fileInput) {
      this.fileBox.addEventListener('click', () => {
        this.fileInput.click();
      });

      this.fileInput.addEventListener('change', () => {
        if (this.fileInput.files.length > 0) {
          const names = Array.from(this.fileInput.files).map(f => f.name).join(', ');
          if (this.fileText) {
            this.fileText.innerHTML = `<strong>Selected:</strong> ${names}`;
          }
        }
      });
    }
  }

  bindForm() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      const company = this.form.querySelector('#quoteCompany')?.value.trim() || 'N/A';
      const name = this.form.querySelector('#quoteName')?.value.trim() || 'N/A';
      const email = this.form.querySelector('#quoteEmail')?.value.trim() || 'N/A';
      const phone = this.form.querySelector('#quotePhone')?.value.trim() || 'N/A';
      const service = this.form.querySelector('#quoteService')?.value.trim() || 'General Oilfield Inquiry';
      const location = this.form.querySelector('#quoteLocation')?.value.trim() || 'Libya Onshore/Offshore';
      const scope = this.form.querySelector('#quoteScope')?.value.trim() || 'Technical specification pending.';
      const filesCount = this.fileInput?.files?.length || 0;
      const fileNames = filesCount > 0 
        ? Array.from(this.fileInput.files).map(f => f.name).join(', ') 
        : 'None (to be forwarded via email)';

      const dateStr = new Date().toISOString().split('T')[0];

      // Format Structured Inquiry Payload
      const payloadText = 
`=============================================================
TECHNICAL SERVICE INQUIRY — JALO GROUP FOR OIL & GAS SERVICES
Date: ${dateStr}
=============================================================
1. CLIENT / OPERATOR DETAILS:
   - Operating Company: ${company}
   - Person in Charge:  ${name}
   - Official Email:    ${email}
   - Direct Phone:      ${phone}

2. OPERATIONAL PARAMETERS:
   - Service Discipline: ${service}
   - Field Basin / Loc:  ${location}

3. TECHNICAL SCOPE OF WORK:
   ${scope}

4. ATTACHED SPECIFICATIONS:
   - Documents: ${fileNames}
=============================================================
Transmitted via Jalo Group Enterprise Portal (Libya)
Contact: inquiry@jalogroup.ly | 24/7 Operations: +218 (21) 360-8400
=============================================================`;

      // Display on-screen summary panel
      if (this.summaryCode && this.summaryPanel) {
        this.summaryCode.textContent = payloadText;
        this.summaryPanel.classList.add('active');
        this.summaryPanel.scrollIntoView({ behavior: 'smooth' });
      }

      // Format RFC mailto link
      const subject = encodeURIComponent(`[RFP / Quote Inquiry] ${service} - ${company}`);
      const body = encodeURIComponent(payloadText);
      const mailtoUrl = `mailto:inquiry@jalogroup.ly?subject=${subject}&body=${body}`;

      // Trigger mailto client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 350);
    });

    if (this.copyBtn && this.summaryCode) {
      this.copyBtn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(this.summaryCode.textContent);
          const origText = this.copyBtn.innerHTML;
          this.copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied to Clipboard!';
          setTimeout(() => {
            this.copyBtn.innerHTML = origText;
          }, 2500);
        } catch (err) {
          console.error('Clipboard copy failed:', err);
        }
      });
    }
  }
}

export const quoteModalManager = new QuoteModalManager();
