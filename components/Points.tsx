import React from 'react';
import { Settings, Triangle, Cloud } from 'lucide-react';

export const Points: React.FC = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          {/* Point 1 */}
          <div className="flex flex-col items-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-900 font-bold text-xl mb-4">
              Point <span className="text-3xl">1</span>
            </div>
            <div className="w-24 h-24 mb-4 flex items-center justify-center text-indigo-900 bg-white rounded-full shadow-inner">
              <div className="relative">
                <Settings size={64} strokeWidth={1.5} />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl bg-yellow-300 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                  C
                </span>
              </div>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">酵素×ビタミンC配合</h3>
            <p className="text-sm text-slate-600 font-bold">(Wの力で汚れを分解)</p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-900 font-bold text-xl mb-4">
              Point <span className="text-3xl">2</span>
            </div>
            <div className="w-24 h-24 mb-4 flex items-center justify-center text-indigo-900 bg-white rounded-full shadow-inner">
              <Triangle size={64} className="fill-current rotate-12 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">クレイ配合</h3>
            <p className="text-sm text-slate-600 font-bold">(汚れを吸着)</p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center p-6 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-indigo-900 font-bold text-xl mb-4">
              Point <span className="text-3xl">3</span>
            </div>
            <div className="w-24 h-24 mb-4 flex items-center justify-center text-indigo-900 bg-white rounded-full shadow-inner">
              <Cloud size={64} className="fill-white text-indigo-200" strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">濃密泡</h3>
            <p className="text-sm text-slate-600 font-bold">(摩擦レス洗顔)</p>
          </div>

        </div>
      </div>
    </section>
  );
};