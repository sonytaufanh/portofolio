// ─────────────────────────────────────────────────────────────
//  DATA PORTOFOLIO — isi dari CV Sony Taufan Hambali.
//  Edit file ini untuk mengubah seluruh isi situs.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sony Taufan Hambali',
  role: 'IT Business Analyst & ERP Functional Support',
  tagline:
    'IT Project Manager, ERP Specialist & IT Support/Admin dengan 5+ tahun pengalaman di system development, operasional IT, dan manajemen proyek — dari perencanaan (BRD) hingga go-live.',
  location: 'Bekasi, Jawa Barat',
  email: 'Sonytaufan567@gmail.com',
  phone: '0851-5675-6569',
  available: true, // tampilkan badge "Tersedia untuk proyek"
  resumeUrl: '/CV-Sony-Taufan-H.pdf',
  // Foto profil: taruh file di folder public/ (mis. public/foto.jpg) lalu isi, mis. '/foto.jpg'.
  // Kosong = tampilkan monogram inisial "ST".
  photo: '',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/sonytaufanh', icon: 'linkedin' },
    // Tambahkan GitHub/Instagram di sini bila ada, mis.:
    // { label: 'GitHub', href: 'https://github.com/username', icon: 'github' },
  ],
}

export const about = {
  heading: 'Tentang Saya',
  paragraphs: [
    'IT Project Manager, ERP Specialist & IT Support/Admin dengan pengalaman lebih dari 5 tahun di bidang system development, operasional IT, dan manajemen proyek — saat ini di PT Modernland Realty Tbk. Berpengalaman memimpin proyek IT dari tahap perencanaan (BRD) hingga go-live, serta mengelola operasional ERP Properti dan aplikasi bisnis internal lintas departemen — Sales, CS, Finance, Accounting, Tax, Project, hingga Quantity Surveyor.',
    'Memiliki pemahaman kuat mengenai alur akuntansi (AR, AP, Cashbook, GL), troubleshooting SQL/SSMS, QC, dan UAT. Berpengalaman dalam administrasi infrastruktur IT, hardware/software support, inventarisasi aset, serta manajemen pengadaan (procurement) dan vendor guna menjamin efisiensi dan kepatuhan operasional IT secara end-to-end.',
  ],
  stats: [
    { value: '5+', label: 'Tahun Pengalaman' },
    { value: '4', label: 'Proyek & Sistem Utama' },
    { value: '8+', label: 'Departemen Didukung' },
  ],
}

export const skills = [
  {
    category: 'ERP & Aplikasi',
    items: ['AST Property ERP', 'ERP Configuration & Support', 'SQL & Data Troubleshooting', 'UAT & Functional Testing'],
  },
  {
    category: 'Project & Business Analysis',
    items: ['IT Project Management', 'BRD & Requirement Analysis', 'Business Process Mapping', 'Stakeholder Management'],
  },
  {
    category: 'Operasional IT',
    items: ['IT Support & Troubleshooting', 'IT Asset & License Management', 'Vendor & ISP Coordination', 'SOP & IT Documentation'],
  },
  {
    category: 'System Development',
    items: ['Web Application Development', 'Workflow & Logic Design', 'Database & Data Validation', 'React • TypeScript • PHP'],
  },
]

// Proyek internal perusahaan — tautan publik tidak tersedia.
// Opsional: isi `image` dengan screenshot (file di public/), mis. image: '/pdf-tools.png'.
export const projects = [
  {
    title: 'PDF Document Tools (Solo Project)',
    description:
      'Aplikasi web internal pengolahan dokumen PDF (merge, split, compress, convert) sebagai solusi in-house pengganti iLovePDF/SmallPDF — meningkatkan efisiensi dan keamanan data perusahaan. Murni client-side, tanpa database.',
    tags: ['TypeScript', 'React', 'HTML5/CSS3', 'Client-Side Processing'],
    link: '',
    demo: '',
    image: '',
    featured: true,
  },
  {
    title: 'E-Catalog Jakarta Garden City',
    description:
      'Mendigitalisasi e-Catalog JGC dari kertas menjadi landing page interaktif: spesifikasi unit, pricelist terbaru, ketersediaan real-time, dan simulasi KPR (DP, tenor, angsuran). Kolaborasi dengan Dept. Sales & Digital Marketing.',
    tags: ['PHP', 'React', 'Responsive Web', 'QC & UAT'],
    link: '',
    demo: '',
    image: '',
    featured: true,
  },
  {
    title: 'Assets Management System (AMS)',
    description:
      'Pengembangan & pembaharuan sistem monitoring lahan dan dokumen legal (Sertipikat, HGB, Land Acquisition) bersama Dept. Land Acquisition, Legal & Permit — meningkatkan akurasi pencatatan dan kontrol data aset.',
    tags: ['System Development', 'QC & UAT', 'Data Validation'],
    link: '',
    demo: '',
    image: '',
    featured: false,
  },
  {
    title: 'E-KPI System (Digital Performance Management)',
    description:
      'Sistem E-KPI bersama HRD untuk menggantikan penilaian kinerja manual menjadi sistem digital terintegrasi — mengubah proses manual menjadi berbasis web untuk efisiensi dan akurasi.',
    tags: ['Web Application', 'Workflow Design', 'UAT bersama HRD'],
    link: '',
    demo: '',
    image: '',
    featured: false,
  },
]

// Pengalaman kerja — urutkan dari yang terbaru.
export const experience = [
  {
    role: 'ERP Application Functional Support & Project Manager',
    company: 'PT Modernland Realty Tbk',
    period: 'Agu 2022 — Sekarang',
    points: [
      'Mengelola operasional dan stabilitas ERP AST untuk Sales, Marketing, Finance, Accounting, Customer Service, modul Pajak, dan Project/QS.',
      'Konfigurasi sistem ERP agar selaras dengan proses bisnis; analisis kebutuhan operasional lintas departemen.',
      'Functional testing, integrasi antar-modul, dan Quality Control (QC) pada setiap pembaruan sistem.',
      'Memfasilitasi UAT bersama key users dan mengawal proses go-live; poin eskalasi utama untuk kendala teknis & fungsional tingkat lanjut.',
      'Monitoring helpdesk & SLA harian; pelatihan user dan penyusunan dokumentasi (user manual, SOP, flowchart).',
      'Memimpin siklus proyek IT dari inisiasi hingga go-live: BRD, spesifikasi fungsional, change request, MoM, manajemen timeline, risiko, dan kualitas.',
    ],
  },
  {
    role: 'IT Administrator & Support',
    company: 'PT Modernland Realty Tbk',
    period: 'Apr 2021 — Agu 2022',
    points: [
      'Mengelola inventarisasi aset IT, distribusi perangkat, dan lisensi software (software compliance).',
      'Mengontrol pengadaan IT: pemantauan anggaran, evaluasi kebutuhan, hingga penerbitan Purchase Order (PO).',
      'Koordinasi vendor (ISP, supplier hardware/software) dan renewal lisensi, garansi, serta SLA.',
      'Dukungan teknis via remote, telepon, email, dan on-site: hardware, software, Windows, Microsoft 365, aplikasi bisnis, LAN/Wi-Fi/VPN.',
      'Instalasi & konfigurasi perangkat; administrasi akun dan hak akses melalui Active Directory; onboarding/offboarding karyawan.',
      'Menyusun SOP, dokumentasi proses kerja IT, dan memantau ticketing sesuai SLA.',
    ],
  },
]

// Pendidikan formal
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
    description: 'Tata kelola TI (IT Governance) dan Sistem Manajemen Keamanan Informasi (ISMS): kepatuhan, manajemen risiko, dan keamanan data operasional.',
  },
  {
    title: 'IT Asset Management & Data Administration Support',
    issuer: 'Udemy',
    year: '2025',
    description: 'Pengelolaan siklus hidup aset IT (ITAM), tata kelola administrasi sistem, inventarisasi data, dan dukungan aplikasi bisnis.',
  },
  {
    title: 'SQL for Data & System Analysis',
    issuer: 'DQLab',
    year: '2024',
    description: 'Sertifikasi pemrosesan dan analisis data dengan SQL untuk data troubleshooting, pengujian sistem, dan analisis database.',
  },
]

// Navigasi utama (href harus cocok dengan id section)
export const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Kontak', href: '#kontak' },
]
