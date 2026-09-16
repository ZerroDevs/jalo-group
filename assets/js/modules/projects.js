/* ==========================================================================
   JALO GROUP - Filterable Projects & Project Detail Modal
   ========================================================================== */

export const projectsData = [
  {
    id: 'sirte-flowlines',
    title: 'Sirte Basin Flowlines Rehabilitation & Manifold Tie-In',
    titleAr: 'إعادة تأهيل خطوط التدفق وربط مجمعات الآبار — حوض سرت',
    client: 'Major Sirte Basin Operator / NOC Joint Venture',
    clientAr: 'شركة تشغيل رئيسية بحوض سرت / ائتلاف المؤسسة الوطنية للنفط',
    location: 'Sirte Basin (Concession 103 / Intisar Field)',
    locationAr: 'حوض سرت (منطقة امتياز 103 / حقل الانتصار)',
    category: 'sirte',
    timeline: '8 Months (Turnaround Phase)',
    timelineAr: '8 أشهر (مرحلة الإيقاف والصيانة الشاملة)',
    image: 'assets/images/hero-oilfield.jpg',
    services: ['Oil & Gas Field Services', 'Mechanical Overhaul', 'Turnkey Services'],
    servicesAr: ['خدمات حقول النفط والغاز', 'الصيانة الميكانيكية', 'الخدمات الصناعية'],
    scope: 'Complete hydrotesting, section replacement, and manifold tie-in across 42 kilometers of 8-inch crude flowlines under extreme desert operating conditions with zero process disruption to neighboring trunklines.',
    scopeAr: 'تنفيذ اختبارات الضغط الهيدروستاتيكي، واستبدال المقاطع التالفة، وربط مجمعات صمامات التدفق على امتداد 42 كيلومتراً من خطوط النفط الخام قياس 8 بوصة دون توقف خطوط النقل الرئيسية.',
    outcome: 'Zero Lost Time Incidents (LTI), delivered 14 days ahead of scheduled production restart, restoring 28,000 BOPD handling capacity.',
    outcomeAr: 'تحقيق صفر حوادث مهدرة للوقت (LTI)، وإنجاز الأعمال قبل 14 يوماً من الموعد المحدد، واستعادة طاقة استيعابية قدرها 28,000 برميل/يوم.'
  },
  {
    id: 'murzuq-power',
    title: 'High-Voltage Switchgear & Power Gen Overhaul',
    titleAr: 'عمرة محطات التحويل الكهربائي والمولدات الغازية — حوض مرزق',
    client: 'Southwestern Basin Energy Consortium',
    clientAr: 'ائتلاف الطاقة بحوض الجنوب الغربي',
    location: 'Murzuq Basin (Sharara & El-Feel Vicinity)',
    locationAr: 'حوض مرزق (منطقة حقول الشرارة والفيل)',
    category: 'murzuq',
    timeline: '6 Months',
    timelineAr: '6 أشهر',
    image: 'assets/images/engineer-ppe.jpg',
    services: ['Electrical & Power Systems', 'Instrumentation & Control'],
    servicesAr: ['الخدمات الكهربائية', 'أجهزة القياس والتحكم'],
    scope: 'Comprehensive maintenance, relay calibration, and diagnostic testing for 33kV gas turbine power generation units, including automated SCADA integration and Emergency Shutdown (ESD) verification.',
    scopeAr: 'أعمال صيانة شاملة ومعايرة مرحلات الحماية واختبارات تشخيصية لمحطات توليد الطاقة التوربينية بجهد 33 ك.ف، مع تحديث منظومة SCADA والإيقاف الاضطراري.',
    outcome: '100% electrical system stability restored across 4 production gathering stations with zero unplanned outages during peak summer loads.',
    outcomeAr: 'استعادة استقرار الشبكة الكهربائية بنسبة 100% عبر 4 محطات تجميع رئيسية دون أي انقطاع خلال ذروة الأحمال الصيفية.'
  },
  {
    id: 'waha-rig-logistics',
    title: 'Drilling Rig Mobilization & Heavy Haulage Fleet',
    titleAr: 'نقل وتجهيز منصات الحفر والقوافل اللوجستية — الواحة',
    client: 'National Drilling Subsidiary / Operator',
    clientAr: 'شركة حفر وطنية ومجموعة تشغيلية',
    location: 'Waha Basin & Gialo Concession Area',
    locationAr: 'حوض الواحة ومنطقة امتياز جالو',
    category: 'waha',
    timeline: 'Ongoing Multi-Year Logistics Contract',
    timelineAr: 'عقد لوجستي استراتيجي متعدد السنوات',
    image: 'assets/images/heavy-equipment.jpg',
    services: ['Drilling Support Services', 'Field Logistics & Heavy Transport', 'Machinery Rental'],
    servicesAr: ['خدمات الحفر', 'النقل والخدمات اللوجستية', 'المعدات والآليات'],
    scope: 'Turnkey rig moving convoy operations involving 2,000 HP heavy drilling rigs, multi-axle desert transport prime movers, rough terrain 120-ton cranes, and remote desert access road grading.',
    scopeAr: 'عمليات نقل كاملة لأبراج الحفر بقدرة 2,000 حصان، وتوفير شاحنات الجر الصحراوية متعددة المحاور، ورافعات 120 طناً، وتمهيد المسارات الصحراوية الوعرة.',
    outcome: 'Over 45 safe rig moves executed across 18 months, maintaining a flawless HSE audit record and zero transport-related downtime.',
    outcomeAr: 'إنجاز أكثر من 45 عملية نقل آمنة لمنصات الحفر خلال 18 شهراً بسجل تدقيق HSE ناصع وخالٍ من أي تعطل تشغيلي.'
  },
  {
    id: 'coastal-refinery-maintenance',
    title: 'Gas Separation & Refinery Manifold Overhaul',
    titleAr: 'صيانة وتأهيل وحدات معالجة الغاز والمجمعات الساحلية',
    client: 'Mediterranean Terminal & Refining Entity',
    clientAr: 'مجمع التكرير وموانئ التصدير على البحر المتوسط',
    location: 'Coastal Refining Corridor (Ras Lanuf / Brega / Mellitah)',
    locationAr: 'المحور الساحلي (رأس لانوف / البريقة / مليتة)',
    category: 'coastal',
    timeline: '5 Months',
    timelineAr: '5 أشهر',
    image: 'assets/images/refinery-plant.jpg',
    services: ['Mechanical Overhaul', 'Procurement & Spare Parts', 'Turnkey Services'],
    servicesAr: ['الصيانة الميكانيكية', 'توريد المعدات وقطع الغيار', 'الخدمات الصناعية'],
    scope: 'Refurbishment of high-pressure centrifugal multi-stage injection pumps, heat exchangers, column tray inspections, and complete supply of certified duplex stainless-steel valves.',
    scopeAr: 'عمرة مضخات الحقن الطاردة المركزية متعددة المراحل ذات الضغط العالي، والمبادلات الحرارية، وتوريد صمامات ستانلس ستيل معتمدة.',
    outcome: 'Enhanced gas dehydration throughput by 22% while ensuring strict emissions compliance and full QA/QC hydrostatic sign-off.',
    outcomeAr: 'رفع كفاءة معالجة وتجفيف الغاز بنسبة 22% مع الامتثال التام لمعايير الانبعاثات وفحوصات الضغط المعتمدة.'
  },
  {
    id: 'sirte-wellhead-integrity',
    title: 'Wellhead Maintenance & Artificial Lift Servicing',
    titleAr: 'صيانة رؤوس الآبار وأنظمة الرفع الاصطناعي — حوض سرت',
    client: 'Joint Venture Petroleum Operating Co.',
    clientAr: 'شركة تشغيل بترولية مشتركة',
    location: 'Central Sirte Basin (Zella & Raguba Fields)',
    locationAr: 'وسط حوض سرت (حقول زلة والرقوبة)',
    category: 'sirte',
    timeline: '12 Months Framework',
    timelineAr: 'اتفاقية إطارية لمدة 12 شهراً',
    image: 'assets/images/hse-safety.jpg',
    services: ['Well Maintenance & Completion', 'Oil & Gas Field Services'],
    servicesAr: ['خدمات الآبار', 'خدمات حقول النفط والغاز'],
    scope: 'Slickline operations, Christmas tree pressure testing, valve gate refurbishment, and Electrical Submersible Pump (ESP) surface control panel servicing across 35 producing wells.',
    scopeAr: 'عمليات الفحص السلكي (Slickline)، واختبار ضغط شجرة عيد الميلاد، وصيانة صمامات البوابة، ولوحات تحكم مضخات الـ ESP عبر 35 بئراً منتجة.',
    outcome: 'Successfully resolved critical pressure leaks on 12 aging wellheads and restored continuous production across inactive candidate wells.',
    outcomeAr: 'معالجة تسربات الضغط الحرجة في 12 بئراً بنجاح وإعادة تشغيل الآبار المتوقفة للإنتاج المستمر.'
  },
  {
    id: 'coastal-terminal-pipeline',
    title: 'Terminal Crude Tank Farm Manifold Integration',
    titleAr: 'تطوير منظومة خطوط خزانات التصدير الرئيسية — الميناء النفطي',
    client: 'Crude Export Terminal Authority',
    clientAr: 'إدارة ميناء وتخزين وتصدير النفط الخام',
    location: 'Es Sider & Zueitina Crude Terminals',
    locationAr: 'ميناء السدرة والزويتينة النفطي',
    category: 'coastal',
    timeline: '4 Months',
    timelineAr: '4 أشهر',
    image: 'assets/images/hero-oilfield.jpg',
    services: ['Engineering & Consultancy', 'Turnkey Services', 'Procurement'],
    servicesAr: ['الخدمات الهندسية والفنية', 'الخدمات الصناعية', 'توريد المعدات'],
    scope: 'Engineering detailed design, pipe rack fabrication, automated actuator installations, and ultrasonic thickness non-destructive testing (NDT) for critical storage manifolds.',
    scopeAr: 'التصميم الهندسي التفصيلي، وتصنيع حوامل الأنابيب، وتركيب المشغلات الآلية لصمامات العزل، وفحوصات السماكة بالموجات فوق الصوتية (NDT).',
    outcome: 'Zero downtime during commercial tanker loading operations and full compliance with international maritime and API 650 storage standards.',
    outcomeAr: 'عدم توقف عمليات الشحن للناقلات التجارية طوال فترة المشروع، والامتثال التام لمعايير API 650 العالمية.'
  }
];

export class ProjectsManager {
  constructor() {
    this.container = document.getElementById('projectsContainer');
    this.filterBtns = document.querySelectorAll('.filter-btn');
    this.modal = document.getElementById('projectModal');
    this.init();
  }

  init() {
    this.bindFilters();
    this.bindProjectDetails();
  }

  bindFilters() {
    if (!this.filterBtns.length) return;

    this.filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');
        this.filterCards(filterVal);
      });
    });
  }

  filterCards(category) {
    const cards = document.querySelectorAll('.project-card-item');
    cards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  bindProjectDetails() {
    document.addEventListener('click', (e) => {
      const detailBtn = e.target.closest('.btn-project-detail');
      if (detailBtn) {
        e.preventDefault();
        const projectId = detailBtn.getAttribute('data-project-id');
        this.openProjectModal(projectId);
      }

      const closeBtn = e.target.closest('#projectModalCloseBtn, .modal-backdrop-close');
      if (closeBtn && this.modal) {
        e.preventDefault();
        this.closeProjectModal();
      }
    });

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeProjectModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeProjectModal();
      }
    });
  }

  openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !this.modal) return;

    const isAr = document.documentElement.getAttribute('lang') === 'ar';

    const titleEl = document.getElementById('pmTitle');
    const clientEl = document.getElementById('pmClient');
    const locationEl = document.getElementById('pmLocation');
    const timelineEl = document.getElementById('pmTimeline');
    const scopeEl = document.getElementById('pmScope');
    const outcomeEl = document.getElementById('pmOutcome');
    const servicesEl = document.getElementById('pmServices');
    const imageEl = document.getElementById('pmImage');

    if (titleEl) titleEl.textContent = isAr ? project.titleAr : project.title;
    if (clientEl) clientEl.textContent = isAr ? project.clientAr : project.client;
    if (locationEl) locationEl.textContent = isAr ? project.locationAr : project.location;
    if (timelineEl) timelineEl.textContent = isAr ? project.timelineAr : project.timeline;
    if (scopeEl) scopeEl.textContent = isAr ? project.scopeAr : project.scope;
    if (outcomeEl) outcomeEl.textContent = isAr ? project.outcomeAr : project.outcome;

    if (imageEl) {
      imageEl.src = project.image;
      imageEl.alt = isAr ? project.titleAr : project.title;
    }

    if (servicesEl) {
      const servicesList = isAr ? project.servicesAr : project.services;
      servicesEl.innerHTML = servicesList
        .map(s => `<span class="badge badge-navy">${s}</span>`)
        .join(' ');
    }

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    if (this.modal) {
      this.modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

export const projectsManager = new ProjectsManager();
