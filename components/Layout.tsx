
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Portofolio', path: '/portfolio' },
    { name: 'Tentang', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#44403c] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#44403c] flex items-center justify-center text-white rounded-sm">M</div>
          <span className="hidden sm:inline">MANGUNTAMA REKA PERSADA</span>
          <span className="sm:hidden">MRP</span>
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase hover:text-orange-800 transition-colors ${location.pathname === link.path ? 'text-orange-800 border-b border-orange-800' : 'text-[#78716c]'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-[#1c1917] text-[#a8a29e] py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white text-lg font-bold mb-6">PT Manguntama Reka Persada</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Konsultan arsitektur yang berdedikasi menciptakan ruang yang bermakna dan berkelanjutan untuk masyarakat Indonesia.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Kontak Kami</h4>
          <p className="text-sm mb-2">Jl. Arsitektur No. 42, Jakarta</p>
          <p className="text-sm mb-2">+62 21 555 0123</p>
          <p className="text-sm">hello@manguntama.id</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Ikuti Kami</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin text-xl"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook text-xl"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-[#44403c] text-xs flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 PT Manguntama Reka Persada. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
