// src/App.jsx
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // <-- 1. Impor AnimatePresence

// Impor Komponen
import IntroLoader from './components/IntroLoader'; // <-- 2. Impor komponen loader baru
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; // <-- Impor Skills
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';

// ... (kode WrappedComponents yang sudah ada tidak perlu diubah) ...
const WrappedAbout = SectionWrapper(About);
const WrappedSkills = SectionWrapper(Skills); // <-- Bungkus Skills
const WrappedProjects = SectionWrapper(Projects);
const WrappedCertificates = SectionWrapper(Certificates);
const WrappedContact = SectionWrapper(Contact);

function App() {
  // --- 3. Tambahkan state untuk loading ---
  const [isLoading, setIsLoading] = useState(() => {
    // Jika 'introLoaded' TIDAK ADA di sessionStorage, maka isLoading = true.
    // Jika ADA, maka isLoading = false.
    return !sessionStorage.getItem("introLoaded");
  });

  useEffect(() => {
    // Jika loading tidak ditampilkan sejak awal, jangan jalankan timer.
    if (!isLoading) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      // Tetap simpan status agar sesi berikutnya tidak loading lagi
      sessionStorage.setItem("introLoaded", "true");
    }, 3500);

    return () => clearTimeout(timer);
  }, [isLoading]); // Tambahkan isLoading sebagai dependensi

  return (
    <>
      {/* --- 4. Gunakan AnimatePresence untuk animasi exit --- */}
      <AnimatePresence>
        {isLoading && <IntroLoader />}
      </AnimatePresence>

      {/* Tampilkan konten utama HANYA JIKA loading sudah selesai */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <WrappedAbout />
            <WrappedSkills /> {/* <-- Tampilkan Skills */}
            <WrappedProjects />
            <WrappedCertificates />
            <WrappedContact />
          </main>
          <footer>
            <div className="container" style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-secondary-text)', fontFamily: 'Chakra Petch' }}>
              &copy; {new Date().getFullYear()} Anugrah Okta - Portfolio. Designed & Built with Cyberpunk vibes.
            </div>
          </footer>
        </>
      )}
    </>
  );
}

export default App;