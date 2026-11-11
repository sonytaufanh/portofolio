// ─────────────────────────────────────────────────────────────
//  DATA PORTOFOLIO — isi dari CV Sony Taufan Hambali.
//  Edit file ini untuk mengubah seluruh isi situs.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sony Taufan Hambali',
  role: 'IT Business Analyst & ERP Functional Support',
  // Teks yang berganti otomatis (typewriter) di hero
  roles: [
    'IT Business Analyst',
    'ERP Functional Support',
    'IT Project Manager',
    'System Development',
  ],
  tagline:
    'Saya menjembatani kebutuhan bisnis dan sistem — dari BRD, proses bisnis, dan konfigurasi ERP, hingga UAT dan go-live yang terukur.',
  location: 'Bekasi, Jawa Barat',
  email: 'Sonytaufan567@gmail.com',
  phone: '0851-5675-6569',
  available: true,
  resumeUrl: '/CV-Sony-Taufan-H.pdf',
  // Foto profil: taruh file di folder public/ (mis. public/foto.jpg) lalu isi, mis. '/foto.jpg'.
  // Kosong = tampilkan monogram inisial "ST".
  photo: '',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sonytaufanh', icon: 'linkedin' },
  ],
}

export const about = {
  heading: 'Tentang Saya',
  paragraphs: [
    'IT Project Manager, ERP Specialist & IT Support/Admin dengan pengalaman lebih dari 5 tahun di bidang system development, operasional IT, dan manajemen proyek — saat ini di PT Modernland Realty Tbk. Saya memimpin proyek IT dari tahap perencanaan (BRD) hingga go-live, serta mengelola operasional ERP Properti dan aplikasi bisnis internal lintas departemen.',
    'Pemahaman kuat soal alur akuntansi (AR, AP, Cashbook, GL), troubleshooting SQL/SSMS, QC, dan UAT. Berpengalaman dalam administrasi infrastruktur IT, hardware/software support, inventarisasi aset, serta manajemen pengadaan dan vendor untuk efisiensi operasional IT secara end-to-end.',
  ],
  stats: [
    { value: '5+', label: 'Tahun Pengalaman' },
    { value: '4', label: 'Proyek & Sistem Utama' },
    { value: '8+', label: 'Departemen Didukung' },
  ],
  focus: ['ERP Implementation', 'Business Analysis', 'IT Operations', 'Web System Development'],
}

// Tahapan kerja — ditampilkan sebagai stepper interaktif
export const process = [
  {
    title: 'Discovery & BRD',
    description:
      'Menggali kebutuhan pengguna dan bisnis, lalu menuangkannya ke Business Requirement Document yang jelas: tujuan, ruang lingkup, dan kriteria penerimaan.',
    tags: ['Requirement Gathering', 'BRD', 'Scope'],
    icon: 'search',
  },
  {
    title: 'Process Mapping',
    description:
      'Memetakan alur bisnis as-is dan to-be lintas departemen, menemukan titik gesekan, dan merancang workflow yang selaras dengan operasional.',
    tags: ['Flowchart', 'As-Is / To-Be', 'Stakeholder'],
    icon: 'workflow',
  },
  {
    title: 'Config & Build',
    description:
      'Melakukan konfigurasi ERP atau pengembangan aplikasi web sesuai spesifikasi fungsional, termasuk pemetaan data antar-modul.',
    tags: ['ERP Config', 'React/TS', 'Functional Spec'],
    icon: 'code',
  },
  {
    title: 'QC & Integration',
    description:
      'Pengujian fungsional dan integrasi antar-modul, validasi data, serta penelusuran masalah lewat SQL/SSMS sebelum sistem dipakai.',
    tags: ['Functional Test', 'SQL', 'Data Validation'],
    icon: 'bug',
  },
  {
    title: 'UAT',
    description:
      'Memfasilitasi User Acceptance Test bersama key users, mencatat temuan, dan memastikan setiap perbaikan sesuai ekspektasi pengguna.',
    tags: ['UAT', 'Key Users', 'Sign-off'],
    icon: 'check',
  },
  {
    title: 'Go-Live & Support',
    description:
      'Mengawal peluncuran, pelatihan pengguna, dokumentasi SOP, serta monitoring helpdesk dan SLA setelah sistem berjalan.',
    tags: ['Go-Live', 'Training', 'SLA / Helpdesk'],
    icon: 'rocket',
  },
]

export const skills = [
  {
    category: 'ERP & Aplikasi',
    items: ['AST Property ERP', 'ERP Configuration & Support', 'SQL & Data Troubleshooting', 'UAT & Functional Testing', 'AR / AP / Cashbook / GL'],
  },
  {
    category: 'Project & Business Analysis',
    items: ['IT Project Management', 'BRD & Requirement Analysis', 'Business Process Mapping', 'Stakeholder Management', 'Change Request & MoM'],
  },
  {
    category: 'Operasional IT',
    items: ['IT Support & Troubleshooting', 'IT Asset & License Management', 'Vendor & ISP Coordination', 'SOP & IT Documentation', 'Procurement & PO'],
  },
  {
    category: 'System Development',
    items: ['Web Application Development', 'React • TypeScript', 'PHP', 'Workflow & Logic Design', 'Database & Data Validation'],
  },
]

// Proyek internal perusahaan — tautan publik tidak tersedia.
// Opsional: isi `image` dengan screenshot (file di public/), mis. image: '/pdf-tools.png'.
export const projects = [
  {
    title: 'PDF Document Tools',
    context: 'Solo Project · Internal',
    year: '2024',
    description:
      'Aplikasi web internal pengolahan dokumen PDF (merge, split, compress, convert) sebagai solusi in-house pengganti iLovePDF/SmallPDF — meningkatkan efisiensi dan keamanan data perusahaan. Murni client-side, tanpa database.',
    highlights: [
      'Menganalisis kebutuhan operasional dan merancang spesifikasi sistem secara mandiri.',
      'Membangun aplikasi React + TypeScript yang responsif dan aman (pemrosesan client-side).',
      'Memangkas biaya langganan platform pihak ketiga dan menjaga kerahasiaan dokumen.',
      'Menjalankan functional testing dan mengawal peluncuran hingga siap dipakai penuh.',
    ],
    tags: ['TypeScript', 'React', 'HTML5/CSS3', 'Client-Side'],
    link: '',
    demo: '',
    image: '',
  },
  {
    title: 'E-Catalog Jakarta Garden City',
    context: 'Kolaborasi Sales & Digital Marketing',
    year: '2023',
    description:
      'Mendigitalisasi e-Catalog JGC dari kertas menjadi landing page interaktif: spesifikasi unit, pricelist terbaru, ketersediaan real-time, dan simulasi KPR (DP, tenor, angsuran).',
    highlights: [
      'Menyusun BRD berdasarkan strategi pemasaran dan masukan tim Sales & Marketing.',
      'Rapid web development: platform responsif, cepat, dan mudah diakses calon pembeli.',
      'Integrasi fitur simulasi KPR interaktif untuk estimasi angsuran, DP, dan tenor.',
      'QC & UAT, optimasi page load speed, dan penyempurnaan tampilan mobile-friendly.',
    ],
    tags: ['PHP', 'React', 'Responsive', 'QC & UAT'],
    link: '',
    demo: '',
    image: '',
  },
  {
    title: 'Assets Management System (AMS)',
    context: 'Kolaborasi Land Acquisition, Legal & Permit',
    year: '2023',
    description:
      'Pengembangan dan pembaharuan sistem monitoring lahan serta dokumen legal (Sertipikat, HGB, Land Acquisition) untuk meningkatkan akurasi pencatatan dan kontrol data aset.',
    highlights: [
      'Berkoordinasi dengan Land Acquisition, Legal & Permit untuk memahami kebutuhan sistem.',
      'Menyesuaikan dan mengembangkan fitur AMS sesuai operasional departemen.',
      'Menjaga akurasi dan konsistensi status lahan serta dokumen legal.',
      'QC & UAT sebelum perubahan diterapkan, plus dokumentasi teknis dan alur proses.',
    ],
    tags: ['System Dev', 'Data Validation', 'QC & UAT'],
    link: '',
    demo: '',
    image: '',
  },
  {
    title: 'E-KPI System',
    context: 'Kolaborasi HRD',
    year: '2022',
    description:
      'Sistem E-KPI untuk menggantikan penilaian kinerja manual menjadi sistem digital terintegrasi — proses evaluasi yang lebih efisien dan akurat.',
    highlights: [
      'Menganalisis kebutuhan HRD dalam proses evaluasi kinerja.',
      'Merancang workflow penilaian KPI secara digital.',
      'Mengubah proses manual menjadi sistem berbasis web.',
      'UAT bersama HRD sebelum implementasi, dilanjutkan pelatihan pengguna.',
    ],
    tags: ['Web App', 'Workflow Design', 'UAT'],
    link: '',
    demo: '',
    image: '',
  },
]

export const experience = [
  {
    role: 'ERP Application Functional Support & Project Manager',
    company: 'PT Modernland Realty Tbk',
    period: 'Agu 2022 — Sekarang',
    badge: 'Current',
    tags: ['ERP AST', 'UAT', 'BRD', 'SLA'],
    points: [
      'Mengelola operasional dan stabilitas ERP AST untuk Sales, Marketing, Finance, Accounting, Customer Service, modul Pajak, dan Project/QS.',
      'Konfigurasi sistem ERP agar selaras dengan proses bisnis; analisis kebutuhan operasional lintas departemen.',
      'Functional testing, integrasi antar-modul, dan Quality Control pada setiap pembaruan sistem.',
      'Memfasilitasi UAT bersama key users dan mengawal go-live; poin eskalasi utama untuk kendala teknis & fungsional tingkat lanjut.',
      'Monitoring helpdesk & SLA harian; pelatihan user dan penyusunan dokumentasi (user manual, SOP, flowchart).',
      'Memimpin siklus proyek IT dari inisiasi hingga go-live: BRD, spesifikasi fungsional, change request, MoM, timeline, risiko, dan kualitas.',
    ],
  },
  {
    role: 'IT Administrator & Support',
    company: 'PT Modernland Realty Tbk',
    period: 'Apr 2021 — Agu 2022',
    badge: '',
    tags: ['ITAM', 'Procurement', 'Vendor'],
    points: [
      'Mengelola inventarisasi aset IT, distribusi perangkat, dan lisensi software (software compliance).',
      'Mengontrol pengadaan IT: pemantauan anggaran, evaluasi kebutuhan, hingga penerbitan Purchase Order.',
      'Koordinasi vendor (ISP, supplier hardware/software) serta renewal lisensi, garansi, dan SLA.',
      'Dukungan teknis via remote, telepon, email, dan on-site: hardware, software, Windows, Microsoft 365, aplikasi bisnis, LAN/Wi-Fi/VPN.',
      'Instalasi & konfigurasi perangkat; administrasi akun dan hak akses via Active Directory; onboarding/offboarding.',
      'Menyusun SOP, dokumentasi proses kerja IT, dan memantau ticketing sesuai SLA.',
    ],
  },
]

export const education = [
  {
    degree: 'S1 Teknik Informatika',
    school: 'Universitas Komputer Indonesia',
    period: '2015 — 2020',
  },
]

export const certifications = [
  {
    title: 'COBIT & ISO/IEC 27001 Training',
    issuer: 'PT PCS (Pandu Cipta Solusindo)',
    year: '2026',
    description:
      'Tata kelola TI (IT Governance) dan Sistem Manajemen Keamanan Informasi (ISMS): kepatuhan, manajemen risiko, dan keamanan data operasional.',
  },
  {
    title: 'IT Asset Management & Data Administration Support',
    issuer: 'Udemy',
    year: '2025',
    description:
      'Pengelolaan siklus hidup aset IT (ITAM), tata kelola administrasi sistem, inventarisasi data, dan dukungan aplikasi bisnis.',
  },
  {
    title: 'SQL for Data & System Analysis',
    issuer: 'DQLab',
    year: '2024',
    description:
      'Sertifikasi pemrosesan dan analisis data dengan SQL untuk data troubleshooting, pengujian sistem, dan analisis database.',
  },
]

export const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proses', href: '#proses' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Kontak', href: '#kontak' },
]
