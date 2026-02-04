import React, { useState } from 'react';
import { Mail, ShoppingCart, Instagram, FileSpreadsheet, Mic, MessageCircle, PenTool, Users, Briefcase } from 'lucide-react';

export default function AgentesPage() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    const filters = [
        'Todos',
        'Ventas y Marketing',
        'Atención al Cliente',
        'Productividad',
        'Recursos Humanos',
        'Data & Analytics'
    ];

    return (
        <main>
            <div className="container page-header">
                <h1>Explora nuestros <span className="gradient-text">Agentes IA</span></h1>
                <p>Miles de automatizaciones listas para potenciar tu negocio hoy mismo.</p>
            </div>

            <div className="filters-bar">
                <div className="container filter-container">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="marketplace-full-grid">

                    {/* Item 1 */}
                    <div className="product-card">
                        <div className="product-badge">Top Ventas</div>
                        <div className="product-icon p-blue"><Mail /></div>
                        <div className="product-info">
                            <h3>Email Sniper</h3>
                            <p>Redacta y personaliza correos de ventas masivos con tasas de apertura del 60%. Integración
                                con Gmail y Outlook.</p>
                            <div className="product-meta">
                                <span className="price">$49/mes</span>
                                <span className="rating">★ 4.9</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="product-card">
                        <div className="product-badge new">Nuevo</div>
                        <div className="product-icon p-purple"><Instagram /></div>
                        <div className="product-info">
                            <h3>Social Growth AI</h3>
                            <p>Gestión completa de redes sociales. Crea copies, diseña imágenes y programa posts
                                automáticamente.</p>
                            <div className="product-meta">
                                <span className="price">$29/mes</span>
                                <span className="rating">★ 4.8</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="product-card">
                        <div className="product-icon p-green"><FileSpreadsheet /></div>
                        <div className="product-info">
                            <h3>Data Cleaner Pro</h3>
                            <p>Elimina duplicados y normaliza formatos en tus Excels y bases de datos CSV instantáneamente.
                            </p>
                            <div className="product-meta">
                                <span className="price">$19/mes</span>
                                <span className="rating">★ 4.7</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="product-card">
                        <div className="product-icon p-orange"><Mic /></div>
                        <div className="product-info">
                            <h3>Voice Agent</h3>
                            <p>Asistente de voz para llamadas entrantes y salientes. Capaz de agendar citas y resolver dudas
                                básicas.</p>
                            <div className="product-meta">
                                <span className="price">$99/mes</span>
                                <span className="rating">★ 4.9</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 5 */}
                    <div className="product-card">
                        <div className="product-icon p-blue"><MessageCircle /></div>
                        <div className="product-info">
                            <h3>WhatsApp Bot AI</h3>
                            <p>Conecta GPT-4 a tu WhatsApp Business. Respuestas inteligentes 24/7 para tus clientes.</p>
                            <div className="product-meta">
                                <span className="price">$39/mes</span>
                                <span className="rating">★ 4.6</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 6 */}
                    <div className="product-card">
                        <div className="product-icon p-purple"><PenTool /></div>
                        <div className="product-info">
                            <h3>Blog Writer</h3>
                            <p>Escribe artículos SEO optimizados de 2000 palabras en minutos. Ideal para marketing de
                                contenidos.</p>
                            <div className="product-meta">
                                <span className="price">$25/mes</span>
                                <span className="rating">★ 4.5</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 7 */}
                    <div className="product-card">
                        <div className="product-icon p-green"><Users /></div>
                        <div className="product-info">
                            <h3>HR Screener</h3>
                            <p>Analiza cientos de CVs en PDF y clasifica a los candidatos según tus requisitos de vacante.
                            </p>
                            <div className="product-meta">
                                <span className="price">$59/mes</span>
                                <span className="rating">★ 4.8</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                    {/* Item 8 */}
                    <div className="product-card">
                        <div className="product-icon p-orange"><Briefcase /></div>
                        <div className="product-info">
                            <h3>Legal Contracts AI</h3>
                            <p>Genera borradores de contratos y revisa documentos legales buscando cláusulas peligrosas.</p>
                            <div className="product-meta">
                                <span className="price">$79/mes</span>
                                <span className="rating">★ 4.9</span>
                            </div>
                            <a href="#" className="btn-product">Comprar <ShoppingCart size={16} /></a>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
