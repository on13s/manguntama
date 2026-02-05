
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Mengenal <br />Manguntama</h1>
            <div className="prose prose-stone">
              <p className="text-lg text-[#57534e] mb-6 leading-relaxed">
                PT Manguntama Reka Persada berdiri dengan satu visi sederhana: menghadirkan arsitektur yang jujur dan manusiawi. Sebagai biro konsultan kelas kecil, kami memiliki kemewahan untuk memberikan perhatian personal pada setiap detail proyek kami.
              </p>
              <p className="text-[#78716c] mb-6 leading-relaxed">
                Kami percaya bahwa kesuksesan sebuah desain bukan diukur dari seberapa megah tampilannya di foto, melainkan seberapa baik ia melayani kehidupan di dalamnya. Pendekatan kami selalu dimulai dengan mendengarkan kebutuhan klien secara mendalam, lalu menerjemahkannya melalui kacamata teknis dan estetika yang matang.
              </p>
              <div className="bg-[#fafaf9] p-8 border-l-4 border-orange-800 mb-8 italic text-[#44403c]">
                "Arsitektur adalah jembatan antara kebutuhan fisik manusia dan aspirasi spiritualnya."
              </div>
            </div>
          </div>
          <div className="space-y-12">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio Office" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-serif font-bold text-[#1c1917]">Integritas</h4>
                <p className="text-sm text-[#78716c] mt-2">Menjaga kualitas teknis dan standar profesionalisme tertinggi.</p>
              </div>
              <div>
                <h4 className="text-2xl font-serif font-bold text-[#1c1917]">Inovasi</h4>
                <p className="text-sm text-[#78716c] mt-2">Selalu mencari cara baru untuk efisiensi dan kenyamanan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
