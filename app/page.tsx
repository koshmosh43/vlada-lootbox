"use client";

import React from "react";
import CasesGrid from "./components/CasesGrid";
import WaveBackground from "./components/WaveBackground";

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <WaveBackground />
      <div className="max-w-7xl mx-auto px-4 text-center pt-8">
        <h1 className="text-4xl font-extrabold text-white mb-2">Vlada Melnyk</h1>
        <p className="text-white mb-6">Please choose your lootbox</p>
      </div>
      <CasesGrid />
    </main>
  );
}