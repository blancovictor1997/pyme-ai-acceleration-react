import React from 'react';
import { FileSpreadsheet, MessageSquare, Clock, AlertCircle, AlertTriangle } from 'lucide-react';

export default function PainPoints() {
    return (
        <section className="pain-points-section">
            <div className="container pain-points-container">
                <div className="pain-points-text" data-animate="slide-right">
                    <div className="pain-badge">
                        <AlertTriangle size={16} />
                        <span>El dolor de crecer</span>
                    </div>

                    <h2>
                        "¿Sientes que el día no te alcanza entre planillas Excel, mensajes sin responder y tareas repetitivas?"
                    </h2>

                    <div className="pain-quote">
                        <div className="quote-line"></div>
                        <p>"No te falta personal, te sobra manualidad."</p>
                    </div>

                    <p className="pain-description">
                        Muchos emprendedores en Chile quedan atrapados en la "trampa de la operación". Pasan el 80% de su tiempo moviendo datos de un lugar a otro en lugar de cerrar negocios.
                    </p>
                </div>

                <div className="pain-points-grid" data-animate="slide-left">
                    <div className="pain-card">
                        <div className="pain-icon icon-blue">
                            <FileSpreadsheet size={24} />
                        </div>
                        <h3>Excel Infinitos</h3>
                        <p>Cientos de filas que dependen de tu memoria y digitación manual.</p>
                    </div>

                    <div className="pain-card">
                        <div className="pain-icon icon-green">
                            <MessageSquare size={24} />
                        </div>
                        <h3>WhatsApp Colapsado</h3>
                        <p>Clientes que se enfrían porque no les respondiste a tiempo.</p>
                    </div>

                    <div className="pain-card">
                        <div className="pain-icon icon-purple">
                            <Clock size={24} />
                        </div>
                        <h3>Horas Perdidas</h3>
                        <p>Tareas repetitivas que podrías haber automatizado hoy.</p>
                    </div>

                    <div className="pain-card">
                        <div className="pain-icon icon-red">
                            <AlertCircle size={24} />
                        </div>
                        <h3>Fuga de Capital</h3>
                        <p>Errores humanos que cuestan dinero y reputación.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
