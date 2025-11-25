import React from 'react';

// ==========================================
// 画像設定エリア
// ==========================================
// 手元の画像を使用する場合は、プロジェクト内に画像を配置し（例: publicフォルダ）、
// 以下のURLをローカルパス（例: "/model.jpg"）に書き換えてください。
const MODEL_IMAGE_URL = "/model.jpg";
// ==========================================

export const Benefit: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          
          {/* Model Image Placeholder */}
          <div className="md:w-1/2 w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>
              <img 
                src={MODEL_IMAGE_URL} 
                alt="透明感のある肌の女性" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => {
                    // 画像が見つからない場合のフォールバック（仮画像）
                    e.currentTarget.src = "https://placehold.co/600x400/eeeeee/333333?text=Clear+Skin+Model";
                    e.currentTarget.onerror = null;
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-snug">
              古い角質・毛穴の<br />
              <span className="text-indigo-900 inline-block border-b-4 border-yellow-300">黒ずみをオフ</span>して、<br />
              パッと明るい印象に。
            </h2>
            <p className="text-slate-600 leading-loose text-lg">
              毎日の洗顔で、つるんとしたたまご肌へ。<br />
              ビタミンC配合の泡が、肌のうるおいを守りながら<br className="hidden md:inline" />やさしく洗い上げます。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
