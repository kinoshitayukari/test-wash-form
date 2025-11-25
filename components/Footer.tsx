import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 py-8 text-center text-slate-500 text-sm border-t border-slate-200">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Rohto Pharmaceutical Co.,Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};