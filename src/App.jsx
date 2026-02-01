import React, { useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react';
import { NAV_ITEMS } from './data';

/* -------------------------------------------------------------------------- */
/* LAYOUT COMPONENTS                                                          */
/* -------------------------------------------------------------------------- */

const Header = ({ isMobileOpen, setIsMobileOpen }) => (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-stone-300 safe-area-inset-top">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center">
                <Link to="/" className="text-lg sm:text-xl md:text-2xl font-serif font-medium text-stone-900 tracking-tight truncate max-w-[60vw]">Hyeonji Julia Lee</Link>
                <nav className="hidden md:flex items-center gap-10">
                    {NAV_ITEMS.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}`
                            }
                            end={item.path === '/'}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
                <button
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="md:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600 hover:text-stone-900 touch-manipulation"
                    aria-label="Menu"
                >
                    {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
);

const MobileOverlay = ({ isOpen, onClose }) => (
    <div className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-stone-50 flex flex-col overflow-hidden pt-[env(safe-area-inset-top)]">
            <div className="flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 border-b border-stone-200 shrink-0">
                <span className="font-serif font-medium text-base sm:text-lg text-stone-900">H. Julia Lee</span>
                <button onClick={onClose} className="p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-500 hover:text-stone-900 touch-manipulation" aria-label="Close">
                    <X size={22} />
                </button>
            </div>
            <nav>
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="block w-full text-left px-4 sm:px-6 py-4 min-h-[48px] flex items-center font-serif text-base sm:text-lg font-medium text-stone-900 hover:bg-stone-100 active:bg-stone-100 border-b border-stone-200 touch-manipulation"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-stone-900 text-stone-400 py-8 sm:py-10 md:py-14 border-t border-stone-800 safe-area-inset-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <p className="font-serif text-stone-400 text-sm sm:text-base">© {new Date().getFullYear()} H. Julia Lee</p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
                {NAV_ITEMS.map((item) => (
                    <Link key={item.path} to={item.path} className="text-sm hover:text-white transition-colors">
                        {item.label}
                    </Link>
                ))}
                <a href="mailto:hyeonjijulialee@gmail.com" className="p-2 hover:text-white transition-colors" aria-label="Email"><Mail size={18} /></a>
                <a href="https://www.linkedin.com/in/hyeonji-julia-lee/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href="https://github.com/hyeonjijulialee" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors" aria-label="GitHub"><Github size={18} /></a>
            </div>
        </div>
    </footer>
);

/* -------------------------------------------------------------------------- */
/* LAYOUT (App)                                                               */
/* -------------------------------------------------------------------------- */

const App = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();
    const isContact = location.pathname === '/contact';

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
            <MobileOverlay isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

            <main className="flex-1 flex flex-col min-h-0">
                <Header isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
                <div className={`max-w-7xl mx-auto w-full flex-1 flex flex-col min-h-0 ${isContact ? 'h-[calc(100vh-12rem)] sm:h-[calc(100vh-14rem)] md:h-[calc(100vh-15rem)] overflow-hidden px-3 sm:px-4 md:px-6 pt-0 pb-3 sm:pb-4 md:pb-6' : 'px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28'}`}>
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
