import React from 'react';
import { ChevronRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-yellow-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
            <p className="text-indigo-900 font-bold text-lg mb-2">まずは試してみませんか？</p>
            <h2 className="text-3xl font-black text-slate-800">毛穴の悩み、さようなら。</h2>
        </div>
        
        <a 
          href="#" 
          className="group inline-block w-full max-w-2xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          aria-label="詳細ページへ移動"
        >
          <div className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-black text-xl md:text-2xl py-6 px-8 rounded-full shadow-lg border-b-4 border-yellow-600 hover:border-yellow-500 flex items-center justify-center gap-2 transition-colors">
            <span>今すぐ試す（詳細はこちら）</span>
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        
        <p className="mt-6 text-xs text-slate-500">
          ※個人の感想であり、効果効能を保証するものではありません。
        </p>
      </div>
    </section>
  );
};