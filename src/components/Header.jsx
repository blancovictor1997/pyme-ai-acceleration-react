import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header({ page, setPage }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Mobile menu styles when open
    const mobileNavStyles = mobileMenuOpen ? {
        display: 'flex',
        position: 'absolute',
        top: '100%',
        left: '0',
        width: '100%',
        flexDirection: 'column',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '2rem',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
    } : {};

    const handleNavClick = (targetPage, hash) => {
        setPage(targetPage);
        setMobileMenuOpen(false);
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    };

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <nav className="container">
                <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}><span className="gradient-text">Pyme</span> AI</a>

                <div className="nav-links" style={window.innerWidth <= 900 ? mobileNavStyles : undefined}>
                    {page === 'home' ? (
                        <>
                            <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Soluciones</a>
                            <a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Por qué REDPY</a>
                            <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
                            <a href="#contacto" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Contacto WhatsApp</a>
                        </>
                    ) : (
                        <>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Volver al Inicio</a>
                            <a href="#contacto" className="btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick('home', '#contacto'); }}>Contacto WhatsApp</a>
                        </>
                    )}
                </div>

                <button className="mobile-menu-btn" aria-label="Menu" onClick={toggleMobileMenu}>
                    <Menu />
                </button>
            </nav>
        </header>
    );
}
