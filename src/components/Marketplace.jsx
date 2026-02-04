import React from 'react';
import { Mail, ShoppingCart, Instagram, FileSpreadsheet, Mic, ArrowRight } from 'lucide-react';

export default function Marketplace({ setPage }) {
    return (
        <section id="marketplace" className="marketplace">
            <div className="container">
                <div className="section-header" data-animate="slide-up">
                    <h2>Marketplace de <span className="gradient-text">Agentes</span></h2>
                    <p>Adquiere soluciones de IA listas para usar. Implementación inmediata en tu flujo de trabajo.</p>
                </div>

                <div className="marketplace-grid">
                    {/* Product 1 */}
                    <div className="product-card" data-animate="scale-up">
                        <div className="product-badge">Top Ventas</div>
                        <div className="product-icon p-blue">
                            <Mail />
                        </div>
                        <div className="product-info">
                            <h3>Email Sniper</h3>
                            <p>Redacta y personaliza correos de ventas masivos con tasas de apertura del 60%.</p>
                            <div className="product-meta">
                                <span className="price">$49/mes</span>
                                <span className="rating">★ 4.9</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="product-card" data-animate="scale-up" style={{ transitionDelay: '100ms' }}>
                        <div className="product-badge new">Nuevo</div>
                        <div className="product-icon p-purple">
                            <Instagram />
                        </div>
                        <div className="product-info">
                            <h3>Social Growth AI</h3>
                            <p>Crea, programa y publica contenido en redes sociales analizando tendencias en tiempo
                                real.</p>
                            <div className="product-meta">
                                <span className="price">$29/mes</span>
                                <span className="rating">★ 4.8</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="product-card" data-animate="scale-up" style={{ transitionDelay: '200ms' }}>
                        <div className="product-icon p-green">
                            <FileSpreadsheet />
                        </div>
                        <div className="product-info">
                            <h3>Data Cleaner Pro</h3>
                            <p>Limpia, organiza y enriquece tus bases de datos de clientes en segundos con IA.</p>
                            <div className="product-meta">
                                <span className="price">$19/mes</span>
                                <span className="rating">★ 4.7</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Product 4 */}
                    <div className="product-card" data-animate="scale-up" style={{ transitionDelay: '300ms' }}>
                        <div className="product-icon p-orange">
                            <Mic />
                        </div>
                        <div className="product-info">
                            <h3>Voice Agent</h3>
                            <p>Automatiza llamadas de confirmación y encuestas de satisfacción con voz natural.</p>
                            <div className="product-meta">
                                <span className="price">$99/mes</span>
                                <span className="rating">★ 4.9</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>
                </div>

                <div className="market-cta" data-animate="fade-in">
                    <button className="btn-secondary" onClick={() => setPage('agentes')} style={{ cursor: 'pointer', border: 'none', fontSize: 'inherit' }}>Ver todos los Agentes <ArrowRight size={16} /></button>
                </div>
            </div>
        </section>
    );
}
