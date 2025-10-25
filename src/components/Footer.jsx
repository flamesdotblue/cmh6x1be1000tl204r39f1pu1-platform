import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} MiniBot. All rights reserved.</p>
        <div className="order-1 md:order-2 flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
