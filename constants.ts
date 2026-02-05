
import { Project, WorkExperience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Wisma Cahaya Lestari',
    category: 'Hunian Modern',
    year: '2023',
    location: 'Bandung, Jawa Barat',
    description: 'Sebuah eksplorasi pencahayaan alami dan ventilasi silang pada lahan terbatas perkotaan. Mengutamakan kenyamanan termal tanpa ketergantungan pada AC.',
    imageUrl: 'https://picsum.photos/id/43/1200/800'
  },
  {
    id: '2',
    title: 'Ruang Kreatif Manguntama',
    category: 'Komersial & Kantor',
    year: '2022',
    location: 'Jakarta Selatan',
    description: 'Renovasi gedung tua menjadi hub kreatif yang dinamis dengan konsep industrial-minimalis yang tetap mempertahankan nilai historis bangunan.',
    imageUrl: 'https://picsum.photos/id/101/1200/800'
  },
  {
    id: '3',
    title: 'Paviliun Senja',
    category: 'Hospitality',
    year: '2023',
    location: 'Ubud, Bali',
    description: 'Resor butik yang menyatu dengan kontur tanah asli. Penggunaan material lokal seperti bambu dan batu alam menjadi elemen utama desain.',
    imageUrl: 'https://picsum.photos/id/164/1200/800'
  },
  {
    id: '4',
    title: 'Masjid Al-Ikhlas',
    category: 'Fasilitas Publik',
    year: '2021',
    location: 'Sleman, Yogyakarta',
    description: 'Desain tempat ibadah yang menggabungkan elemen tradisional Jawa dengan geometri modern untuk menciptakan suasana yang khidmat dan tenang.',
    imageUrl: 'https://picsum.photos/id/191/1200/800'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  { id: 'exp1', name: 'DED Renovasi Gedung Arsip Nasional', client: 'Kementerian Sekretariat Negara', year: '2024', sector: 'Pemerintah' },
  { id: 'exp2', name: 'Perencanaan Interior Kantor Pusat TechCorp', client: 'PT Tech Innovation Indonesia', year: '2024', sector: 'Swasta' },
  { id: 'exp3', name: 'Desain Villa Amarta Sanur', client: 'Pribadi / PT Amarta Bali', year: '2024', sector: 'Swasta' },
  { id: 'exp4', name: 'Masterplan Kawasan Wisata Situ Gede', client: 'Dinas Pariwisata Jawa Barat', year: '2023', sector: 'Pemerintah' },
  { id: 'exp5', name: 'Renovasi Fasad Gedung Perkantoran Sudirman', client: 'PT Central Land', year: '2023', sector: 'Swasta' },
  { id: 'exp6', name: 'Pembangunan Puskesmas Keliling Modern', client: 'Dinas Kesehatan Kab. Bekasi', year: '2023', sector: 'Pemerintah' },
  { id: 'exp7', name: 'Perencanaan GOR Multi-fungsi Sukasari', client: 'Kementerian Pemuda dan Olahraga', year: '2022', sector: 'Pemerintah' },
  { id: 'exp8', name: 'Interior Retail & Coffee Shop GroundZero', client: 'PT Kopi Bangsa', year: '2022', sector: 'Swasta' },
  { id: 'exp9', name: 'Audit Struktur Gedung Sekolah Dasar Inpres', client: 'Kementerian Pendidikan', year: '2022', sector: 'Pemerintah' },
  { id: 'exp10', name: 'Revitalisasi Pasar Tradisional Modern', client: 'Pemerintah Kota Surakarta', year: '2021', sector: 'Pemerintah' },
  { id: 'exp11', name: 'Perumahan Townhouse Lestari Indah', client: 'PT Lestari Realty', year: '2021', sector: 'Swasta' },
  { id: 'exp12', name: 'Gedung Serbaguna Masjid Agung Palembang', client: 'Yayasan Masjid Agung', year: '2021', sector: 'Swasta' },
];

export const SYSTEM_INSTRUCTION = `
Anda adalah asisten AI resmi dari PT Manguntama Reka Persada.
Nama perusahaan: PT Manguntama Reka Persada.
Website resmi: manguntamareka.com
Fokus: Hunian, komersial, dan fasilitas publik.
Nilai utama: Kejujuran material, efisiensi ruang, dan keberlanjutan lingkungan.

Tugas Anda adalah:
1. Menjawab pertanyaan pengunjung tentang layanan kami (arsitektur, desain interior, masterplanning).
2. Memberikan informasi tentang portofolio kami (Wisma Cahaya Lestari, Ruang Kreatif Manguntama, Paviliun Senja, Masjid Al-Ikhlas).
3. Memberikan informasi detail dari daftar pengalaman kerja (4 tahun terakhir) jika ditanyakan oleh klien.
4. Membantu pengunjung menjadwalkan konsultasi awal.
5. Menjelaskan filosofi desain kami: "Membangun dengan Hati, Merancang untuk Masa Depan".

Gunakan bahasa yang profesional namun ramah dan hangat (Bahasa Indonesia).
`;
