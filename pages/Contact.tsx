
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#fafaf9]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Mari Berkolaborasi</h1>
            <p className="text-[#78716c] max-w-xl mx-auto text-lg">
              Punya proyek impian atau ingin bertanya tentang layanan kami? Tim kami siap berdiskusi dengan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="bg-white p-10 shadow-xl rounded-sm border border-gray-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#44403c]">Nama Lengkap</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-800 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#44403c]">Alamat Email</label>
                      <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-800 transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#44403c]">Subjek</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-800 transition-colors" placeholder="Konsultasi Hunian Pribadi" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-[#44403c]">Pesan Anda</label>
                    <textarea rows={5} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-orange-800 transition-colors" placeholder="Ceritakan sedikit tentang proyek Anda..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-[#44403c] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-orange-900 transition-all duration-300">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 border-b border-gray-200 pb-2">Lokasi Kantor</h4>
                <p className="text-[#57534e] text-sm leading-relaxed">
                  PT Manguntama Reka Persada <br />
                  Jl. Arsitektur No. 42, Kebayoran Baru, <br />
                  Jakarta Selatan, 12110
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#1c1917] mb-6 border-b border-gray-200 pb-2">Kontak Langsung</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-[#57534e]">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-800">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <span>+62 21 555 0123</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#57534e]">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-800">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <span>hello@manguntama.id</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#57534e]">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-orange-800">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <span>+62 812 3456 7890</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-xs text-[#a8a29e] italic">
                  *Untuk respon yang lebih cepat, Anda juga bisa berinteraksi dengan asisten virtual kami di pojok kanan bawah layar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
