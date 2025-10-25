import React from 'react';
import { Bot } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-neutral-800/80 bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-400 to-amber-600 text-neutral-900">
              <Bot className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">MiniBot</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#get-started"
              className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20 transition border border-white/10"
            >
              Get Started
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/10">
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
