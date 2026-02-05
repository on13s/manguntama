
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2070" 
            alt="Architecture Hero" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <p className="text-orange-400 uppercase tracking-[0.3em] font-medium mb-4 text-sm">PT MANGUNTAMA REKA PERSADA</p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight mb-8 max-w-4xl">
            Membangun dengan Hati, <br />
            <span className="italic">Merancang Masa Depan.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/portfolio" className="px-8 py-4 bg-white text-[#1c1917] font-bold tracking-widest uppercase text-xs hover:bg-orange-500 hover:text-white transition-all duration-300">
              Lihat Portofolio
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white text-white font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-[#1c1917] transition-all duration-300">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-white opacity-50"></i>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-[#1c1917]">Filosofi Desain Kami</h2>
              <p className="text-[#57534e] leading-relaxed mb-6 text-lg">
                Di PT Manguntama Reka Persada, kami percaya bahwa arsitektur bukan sekadar estetika visual, melainkan bagaimana sebuah ruang mampu berdialog dengan penghuninya dan lingkungan sekitarnya.
              </p>
              <p className="text-[#57534e] leading-relaxed mb-8">
                Sebagai konsultan kelas menengah yang progresif, kami mengutamakan detail, kejujuran material, dan efisiensi energi. Setiap garis yang kami tarik memiliki alasan fungsional dan emosional.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-orange-800 mb-2">01. Berkelanjutan</h4>
                  <p className="text-sm text-[#78716c]">Menghargai alam dengan desain ramah lingkungan.</p>
                </div>
                <div>
                  <h4 className="font-bold text-orange-800 mb-2">02. Kontekstual</h4>
                  <p className="text-sm text-[#78716c]">Menyatu dengan budaya dan iklim lokal.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1000" 
                alt="Architect Working" 
                className="w-full h-[500px] object-cover shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 -left-10 bg-[#44403c] text-white p-10 hidden md:block">
                <p className="text-4xl font-serif italic mb-2">10+</p>
                <p className="text-xs uppercase tracking-widest">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-[#fafaf9]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-4">Proyek Pilihan</h2>
              <p className="text-[#78716c]">Eksplorasi kreativitas dan teknis dalam setiap karya kami.</p>
            </div>
            <Link to="/portfolio" className="text-[#44403c] font-bold border-b-2 border-[#44403c] pb-1 hover:text-orange-800 hover:border-orange-800 transition-colors">
              Lihat Semua
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-orange-800 font-bold mb-2">{project.category}</p>
                <h3 className="text-2xl font-serif font-bold mb-3">{project.title}</h3>
                <p className="text-[#78716c] text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#44403c] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Siap Membangun Impian Anda?</h2>
          <p className="text-[#a8a29e] mb-12 max-w-2xl mx-auto">
            Mari diskusikan visi Anda. Kami hadir untuk membantu mewujudkan ruang yang tidak hanya indah, tapi juga fungsional dan berkelanjutan.
          </p>
          <Link to="/contact" className="inline-block px-12 py-5 bg-white text-[#1c1917] font-bold tracking-widest uppercase text-xs hover:bg-orange-500 hover:text-white transition-all duration-300">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
