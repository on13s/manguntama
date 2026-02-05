
import React, { useState } from 'react';
import { PROJECTS, WORK_EXPERIENCE } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'Semua' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Portofolio</h1>
          <p className="text-[#78716c] max-w-2xl text-lg">
            Kumpulan karya kami yang merefleksikan dedikasi terhadap kualitas desain dan kepuasan klien. Dari hunian pribadi hingga fasilitas publik.
          </p>
        </div>

        {/* Visual Projects Grid */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-[#44403c] text-white' 
                : 'bg-white text-[#78716c] hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20 mb-32">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-xl rounded-sm">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-6 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
                    Detail Proyek
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange-800 font-bold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-[#78716c] text-sm italic">{project.location} — {project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience List Section */}
        <div className="mt-40">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Daftar Pengalaman Kerja</h2>
            <p className="text-[#78716c]">Rekam jejak proyek teknis PT Manguntama Reka Persada dalam 4 tahun terakhir.</p>
          </div>

          <div className="bg-white shadow-sm border border-gray-100 overflow-hidden rounded-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#44403c] text-white">
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest">Nama Pekerjaan</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest">Pemberi Kerja</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-center">Tahun</th>
                    <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-right">Sektor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {WORK_EXPERIENCE.map((exp) => (
                    <tr key={exp.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 text-sm font-medium text-[#1c1917]">{exp.name}</td>
                      <td className="py-5 px-6 text-sm text-[#57534e]">{exp.client}</td>
                      <td className="py-5 px-6 text-sm text-[#78716c] text-center">{exp.year}</td>
                      <td className="py-5 px-6 text-right text-xs">
                        <span className={`inline-block px-3 py-1 rounded-full font-bold uppercase tracking-tighter ${
                          exp.sector === 'Pemerintah' 
                          ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                          : 'bg-orange-50 text-orange-700 border border-orange-100'
                        }`}>
                          {exp.sector}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <p className="text-xs text-[#a8a29e] italic">
              *Halaman ini hanya menampilkan sebagian dari total portofolio kami. Untuk profil lengkap, silakan hubungi kami.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
