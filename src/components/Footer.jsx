import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-brand">
                    <h4>REDPY</h4>
                    <p>Democratizando la inteligencia artificial para el motor de la economía.</p>
                </div>
                <div className="footer-links">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
            <div className="copyright">
                © 2026 Pyme AI. Todos los derechos reservados.
            </div>
        </footer>
    );
}
