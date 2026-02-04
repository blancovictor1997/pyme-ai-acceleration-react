import React from 'react';
import { ShieldCheck, Users, Cpu, TrendingUp } from 'lucide-react';

export default function Features() {
    return (
        <section id="nosotros" className="features">
            <div className="container">
                <div className="features-split">

                    <div className="features-content" data-animate="slide-right">
                        <h2>¿Por qué elegir <span className="gradient-text">REDPY</span> para tu negocio?</h2>
                        <p>En Chile, la mayoría de las soluciones de IA son demasiado complejas o demasiado caras. Nosotros creamos el puente perfecto entre la alta tecnología y la PyME.</p>

                        <div className="features-list">
                            <div className="feature-check-item">
                                <div className="check-icon"><ShieldCheck size={18} /></div>
                                <span>Soporte técnico 100% en español chileno</span>
                            </div>
                            <div className="feature-check-item">
                                <div className="check-icon"><ShieldCheck size={18} /></div>
                                <span>Implementación en tiempo récord (menos de 15 días)</span>
                            </div>
                        </div>
                    </div>

                    <div className="features-cards" data-animate="slide-left">
                        <div className="feature-card-item">
                            <div className="f-icon-box bg-blue-soft"><Users size={24} /></div>
                            <h4>Aterrizado al Chile real</h4>
                            <p>Entendemos el mercado local, sus modismos y sus desafíos financieros. No somos software genérico extranjero, somos tu socio local.</p>
                        </div>

                        <div className="feature-card-item">
                            <div className="f-icon-box bg-purple-soft"><Cpu size={24} /></div>
                            <h4>Sin fricción técnica</h4>
                            <p>No necesitas ser programador ni contratar un departamento de IT. Nosotros implementamos, tú supervisas el crecimiento.</p>
                        </div>

                        <div className="feature-card-item">
                            <div className="f-icon-box bg-orange-soft"><TrendingUp size={24} /></div>
                            <h4>Escalabilidad real</h4>
                            <p>Soluciones que crecen contigo, desde una oficina unipersonal hasta una constructora con cientos de trabajadores.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
