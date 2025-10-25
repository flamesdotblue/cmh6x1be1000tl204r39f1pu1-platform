import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_70%_30%,rgba(253,186,116,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Friendly robotics, minimalist design
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-prose">
              Meet our black-and-white mini robot with a playful personality and subtle orange glow. Interact with the live 3D model and explore how elegant tech can feel approachable.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-orange-500 to-amber-600 px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-95 transition"
              >
                Explore the Robot
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-500" /> Real-time 3D
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neutral-600" /> Interactive & playful
              </div>
            </div>
          </div>
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[680px] rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur overflow-hidden">
            <Spline
              scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
