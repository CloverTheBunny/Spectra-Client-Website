import React from 'react';
import { Download, Shield, Zap, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1527] via-[#7053FF] to-[#846BFF] text-white">
      <div className="absolute inset-0 bg-black/60" />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center relative">
          <img 
            src="https://previews.dropbox.com/p/thumb/ACdTx5QkE-aAo5dnUp9mfQ0Iqiq6JKavvi1XYduS45v4H0BIuEC4INkZtZlE5zgVRZkoSCljDiTF2KIVTD-yqjPCplEOoWBFb3N0AUnxW8aqUO-dZ5ZpMun3eWho7eJaeujTxg6o9d99ErreKnsgzyk18V2o1TavVMZJ2U4TwYM_-rM62nqVzvsCY5IhofO6nFr7biT4QZXHQLrGaxw_l2xwZ-9kSKPoV7v0Z8MG7vsQpasSUMEsB38iCsJTiq7qVDFMnfP8oM8WHPdWuU5qdunnWpsyvhppBqFFAxvQ45dsvucDWECMbKhQ_zZuTyLzbF4/p.png"
            alt="Spectra Client Logo"
            className="w-64 md:w-96 mb-8"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Elevate Your Minecraft Experience
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl opacity-90">
            Experience Minecraft like never before with our cutting-edge client
          </p>
          <button 
            onClick={() => window.location.href = '#download'}
            className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full font-semibold text-lg
                     hover:bg-white/20 transition-all duration-300 flex items-center gap-2
                     border border-white/20 hover:border-white/40 shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Now
          </button>
        </div>

        {/* Features Section */}
        <section className="py-20 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose Spectra?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield />}
              title="Undetectable"
              description="Undetectable by any anti-cheat and completely screen-share and OBS proof"
            />
            <FeatureCard 
              icon={<Zap />}
              title="Large array of modules"
              description="Dozens of high quality modules to easily over-power any legit player"
            />
            <FeatureCard 
              icon={<Sparkles />}
              title="Modern Interface"
              description="Sleek and intuitive UI designed for the best experience"
            />
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Download Spectra Client
            </h2>
            <div className="flex flex-col items-center gap-6">
              <p className="text-lg text-center max-w-2xl opacity-90">
                Get ready to transform your cheating experience with Spectra Client.
                Download now and join thousands of satisfied hackers.
              </p>
              <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full
                               font-semibold text-lg transition-all duration-300
                               border border-white/20 hover:border-white/40 shadow-lg">
                Download v1.0
              </button>
              <p className="text-sm opacity-70">
                Compatible with Minecraft 1.7.10 - 1.8.9
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 backdrop-blur-lg">
        <div className="container mx-auto px-4 text-center text-sm opacity-70">
          © 2024 Spectra Client. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;