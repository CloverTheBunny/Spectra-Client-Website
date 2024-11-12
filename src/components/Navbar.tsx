import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://previews.dropbox.com/p/thumb/ACdOnaj4aJP5oz8Kw3Yz-ZyHONy_NU2LTZR7GOYqtp0sukW3T8kHFm0N1nmvGnTmWW62QP0sWfv7MeNHCwOuNoOibd_lTSb5Nqh9Ykw6MvPgh4GrpjHbdIm9gTAdUiWwynrjIKp4u0PJ4u0N_YmGuySlVHG_DQ_fygooL3Z4ixnf_xrpir5S_Caa6qZd4u8Jj8K7w-xphCkWz_VoBOXdTpDqN6RkHKU1MCLqLTVLsH8pOLLN22Mjno7WnfkSQQhm8fFjM6789rsi5gOf9phgs7brWUO6GJqtJbHHaUsCgV24rz5h4nxcIJQMTp32zSoRL2A/p.png"
              alt="Spectra Logo"
              className="h-10 w-10"
            />
            <span className="font-bold text-2xl">Spectra</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#features" className="hover:opacity-80 transition-opacity">Features</a>
            <a href="#download" className="hover:opacity-80 transition-opacity">Download</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">Home</a>
              <a href="#features" className="hover:opacity-80 transition-opacity">Features</a>
              <a href="#download" className="hover:opacity-80 transition-opacity">Download</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};