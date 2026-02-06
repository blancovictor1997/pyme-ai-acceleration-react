import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Features from './components/Features';

import Process from './components/Process';

import Footer from './components/Footer';
import Background from './components/Background';

import ChatAssistant from './components/ChatAssistant';
import ContactModal from './components/ContactModal';

import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [page, setPage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Mouse move effect hook
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.service-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [page]); // Re-attach when page changes as new elements might appear

  // Initialize scroll animation
  useScrollAnimation(page);

  return (
    <>
      <Background />
      <Header page={page} setPage={setPage} openModal={openModal} />

      {page === 'home' ? (
        <main>
          <Hero openModal={openModal} />
          <PainPoints />
          <Services />
          <Features />
          <Process openModal={openModal} />
        </main>
      ) : (
        <AgentesPage />
      )}

      <ChatAssistant />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <Footer />
    </>
  );
}

export default App;
