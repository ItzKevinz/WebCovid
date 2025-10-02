import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DataCovid from './components/DataCovid/DataCovid';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const olahragaRef = useRef(null);    // section "jenis penyakit / olahraga"
  const pencegahanRef = useRef(null);  // section pencegahan (Banner)
  const dataCovidRef = useRef(null);   // section data covid (DataCovid)

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ offset: 100, duration: 800, easing: "ease-in-sine", delay: 100 });
    AOS.refresh();
  }, []);

  const onSearch = (queryRaw) => {
    const q = (queryRaw || "").toLowerCase().trim();

    if (!q) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const preventionKeywords = ["pencegahan", "prevent", "mask", "manfaat", "vaksin"];
    const dataKeywords = ["data", "covid", "kasus", "datacovid", "data covid", "tren", "grafik"];
    const olahragaKeywords = ["jenis", "penyakit", "olahraga"];

    if (preventionKeywords.some(k => q.includes(k))) {
      pencegahanRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (dataKeywords.some(k => q.includes(k))) {
      dataCovidRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (olahragaKeywords.some(k => q.includes(k))) {
      olahragaRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const q = searchTerm.trim();
    const timer = setTimeout(() => {
      if (q.length > 0) onSearch(q);
    }, 450);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar
              olahragaRef={olahragaRef}
              pencegahanRef={pencegahanRef}
              dataCovidRef={dataCovidRef}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onSearch={onSearch}
            />
            <Hero />

            {/* Section kosong hanya untuk jadi target scroll */}
            <section ref={olahragaRef} style={{ minHeight: "50px" }}>
              <h2 className="text-center font-bold"></h2>
            </section>

           
            <DataCovid ref={dataCovidRef} />

            <Banner ref={pencegahanRef} />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;
