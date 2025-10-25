import React from 'react';
import { Rocket, Cpu, Bot, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast onboarding',
    desc: 'Get up and running in minutes with a streamlined experience and familiar tools.'
  },
  {
    icon: Cpu,
    title: 'Optimized performance',
    desc: 'Lightweight, efficient, and tuned for smooth 3D interactions across devices.'
  },
  {
    icon: Bot,
    title: 'Playful intelligence',
    desc: 'A friendly robot aesthetic that welcomes users while showcasing tech depth.'
  },
  {
    icon: Shield,
    title: 'Secure by design',
    desc: 'Built with modern best practices to keep your experience safe and reliable.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 border-t border-neutral-800/80">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_20%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why you’ll love it</h2>
          <p className="mt-3 text-neutral-300">
            Designed to blend minimalism with character. The subtle orange lighting adds warmth to cutting-edge robotics.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-neutral-900/40 p-6 hover:border-orange-500/40 transition relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl group-hover:bg-orange-500/20 transition pointer-events-none" />
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 border border-white/10 text-orange-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
