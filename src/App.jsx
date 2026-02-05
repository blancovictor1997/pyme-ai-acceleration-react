import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Features from './components/Features';
import Marketplace from './components/Marketplace';
import Process from './components/Process';

import Footer from './components/Footer';
import Background from './components/Background';
import AgentesPage from './components/AgentesPage';
import ChatAssistant from './components/ChatAssistant';

import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const [page, setPage] = useState('home');

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
      <Header page={page} setPage={setPage} />

      {page === 'home' ? (
        <main>
          <Hero />
          <PainPoints />
          <Services />
          <Features />
          <Process />

        </main>
      ) : (
        <AgentesPage />
      )}


      <Footer />
      <ChatAssistant />
    </>
  );
}

export default App;
