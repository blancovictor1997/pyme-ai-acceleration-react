import React, { useState } from 'react';
import { Car, Scale, Utensils, Building2, Zap, ArrowRight, MousePointerClick } from 'lucide-react';

const industries = [
    {
        id: 'automotora',
        name: 'Automotoras y Maquinaria',
        icon: Car,
        title: 'Agentes de venta 24/7 y gestión de inventario predictivo.',
        impact: 'No pierdas ni un lead, incluso fuera de horario.',
        image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800', // Car/Industry image
        link: '#'
    },
    {
        id: 'legal',
        name: 'Salud y Abogados',
        icon: Scale,
        title: 'Automatización de citas y triaje inteligente de consultas.',
        impact: 'Reduce el ausentismo y filtra consultas básicas automáticamente.',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800', // Medical/Legal image
        link: '#'
    },
    {
        id: 'gastronomia',
        name: 'Gastronomía y Turismo',
        icon: Utensils,
        title: 'Reservas automáticas y marketing personalizado para clientes.',
        impact: 'Llena tus mesas en horas valle con promociones IA.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', // Restaurant image
        link: '#'
    },
    {
        id: 'construccion',
        name: 'Construcción e Inmobiliaria',
        icon: Building2,
        title: 'Seguimiento de obras y cualificación de prospectos inmobiliarios.',
        impact: 'Vende más rápido identificando al comprador ideal al instante.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800', // Construction image
        link: '#'
    }
];

export default function Services() {
    const [activeTab, setActiveTab] = useState(industries[0]);

    return (
        <section id="servicios" className="services">
            <div className="container">
                <div className="section-header" data-animate="slide-up">
                    <h2>Hub de <span className="gradient-text">Soluciones</span></h2>
                    <p>Selecciona tu industria y descubre cómo la IA de REDPY transforma tu negocio.</p>
                </div>

                <div className="hub-tabs" data-animate="slide-up">
                    {industries.map((industry) => (
                        <button
                            key={industry.id}
                            className={`hub-tab-btn ${activeTab.id === industry.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(industry)}
                        >
                            <industry.icon size={18} />
                            {industry.name}
                        </button>
                    ))}
                </div>

                <div className="hub-content-card" data-animate="fade-in">
                    <div className="hub-image">
                        <img src={activeTab.image} alt={activeTab.name} />
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                            display: 'flex', alignItems: 'flex-end', padding: '2rem'
                        }}>
                            {/* Optional overlay content if needed */}
                        </div>
                    </div>
                    <div className="hub-details">
                        <div className="industry-badge">
                            <activeTab.icon size={16} />
                            {activeTab.name}
                        </div>
                        <h3>{activeTab.title}</h3>

                        <div className="impact-box">
                            <div className="impact-icon">
                                <Zap size={18} />
                            </div>
                            <div className="impact-content">
                                <h4>Impacto de Negocio</h4>
                                <p>{activeTab.impact}</p>
                            </div>
                        </div>

                        <a href="#contacto" className="hub-link">
                            Solicitar demo personalizada para este sector <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
