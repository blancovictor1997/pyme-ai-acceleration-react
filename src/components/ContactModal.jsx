import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        interest: 'automation'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission would go here
        console.log('Form submitted:', formData);
        alert('¡Gracias! Nos pondremos en contacto contigo pronto.');
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Close when pressing Escape
    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
        }}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
                    <X size={24} />
                </button>

                <div className="modal-body">
                    <div className="modal-left">
                        <h3>¿Listo para <span className="gradient-text">Evolucionar?</span></h3>
                        <p>Agenda una consultoría gratuita de 15 minutos. Analizaremos tu negocio y te diremos exactamente dónde la IA puede generar valor inmediato.</p>

                        <div className="modal-features-list">
                            <div className="modal-feature-item">
                                <div className="modal-feature-icon"><CheckCircle /></div>
                                <div className="modal-feature-text">
                                    <h4>Auditoría Inicial Gratuita</h4>
                                    <p>Evaluamos tu estado actual sin costo.</p>
                                </div>
                            </div>
                            <div className="modal-feature-item">
                                <div className="modal-feature-icon"><CheckCircle /></div>
                                <div className="modal-feature-text">
                                    <h4>Plan a Medida</h4>
                                    <p>Estrategia personalizada para tu pyme.</p>
                                </div>
                            </div>
                            <div className="modal-feature-item">
                                <div className="modal-feature-icon"><CheckCircle /></div>
                                <div className="modal-feature-text">
                                    <h4>ROI Proyectado</h4>
                                    <p>Claridad en el retorno de tu inversión.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-right">
                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="modal-form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Tu nombre"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modal-form-group">
                                <label htmlFor="company">Empresa</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Nombre de tu Pyme"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modal-form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="tucorreo@empresa.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="modal-form-group">
                                <label htmlFor="interest">Interés Principal</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                >
                                    <option value="automation">Automatización de Procesos</option>
                                    <option value="chatbots">Asistentes Virtuales (Chatbots)</option>
                                    <option value="analysis">Análisis de Datos</option>
                                    <option value="consulting">Consultoría General</option>
                                </select>
                            </div>

                            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                                Solicitar Auditoría <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
