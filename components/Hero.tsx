import React from 'react';

// ==========================================
// 画像設定エリア
// ==========================================
// 手元の画像を使用する場合は、プロジェクト内に画像を配置し（例: publicフォルダ）、
// 以下のURLをローカルパス（例: "/product.jpg"）に書き換えてください。
const PRODUCT_IMAGE_URL = "https://tshop.r10s.jp/rakuten24/cabinet/a02/4987241173249.jpg";
// ==========================================

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-300 to-yellow-400 overflow-hidden pb-12 pt-12 md:pt-20">
      {/* Decorative Lemons */}
      <div className="absolute top-5 right-5 text-6xl opacity-80 animate-float hidden md:block select-none pointer-events-none">
        🍋
      </div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-80 animate-float-delayed hidden md:block select-none pointer-events-none">
        🍋
      </div>

      {/* Bubbles Decoration */}
      <div className="absolute bg-white/40 rounded-full z-0 w-20 h-20 top-10 left-1/4 animate-pulse" />
      <div className="absolute bg-white/40 rounded-full z-0 w-10 h-10 top-1/2 right-10 animate-pulse delay-75" />
      <div className="absolute bg-white/40 rounded-full z-0 w-32 h-32 bottom-0 right-1/4 animate-pulse delay-150" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-indigo-900 font-black leading-tight drop-shadow-sm">
              <span className="block text-5xl md:text-6xl mb-2">毛穴、つるん！</span>
              <span className="block text-2xl md:text-3xl text-indigo-900/90">
                酵素×ビタミンCの力で、<br className="hidden md:inline" />
                透明感あふれる<br className="hidden md:inline" />
                クリアな肌へ。
              </span>
            </h1>
            <p className="text-slate-800 font-bold text-lg mt-4 leading-relaxed">
              メラノCC ディープクリア 酵素洗顔<br />
              ー 毎日使える、毛穴ケア。
            </p>
          </div>

          {/* Product Image Placeholder */}
          <div className="md:w-1/3 relative w-full flex justify-center">
            <div className="relative w-full max-w-xs animate-float">
              {/* Foam Splash Background Effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/30 blur-xl rounded-full pointer-events-none"></div>
              
              {/* Product Image */}
              <img 
                src={PRODUCT_IMAGE_URL} 
                alt="メラノCC ディープクリア酵素洗顔 商品画像" 
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-lg transform rotate-6 hover:rotate-0 transition-transform duration-500 object-contain"
                onError={(e) => {
                  // 画像が見つからない場合のフォールバック（仮画像）
                  e.currentTarget.src = "https://placehold.co/300x500/FFDD00/ffffff?text=Melano+CC";
                  e.currentTarget.onerror = null; // 無限ループ防止
                }}
              />
              
              {/* Badge */}
              <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-5 bg-yellow-500 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center shadow-lg z-20">
                <span className="text-white font-bold text-xs text-center leading-tight">
                  ビタミン<br />配合
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};