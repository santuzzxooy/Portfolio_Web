import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import CardsContainer from './Components/CardsContainer'
import DescriptionCard from './Components/DescriptionCard'
import TechRoller from './Components/TechRoller'
import ServicesCard from './Components/ServicesCard'
import StudiesCard from './Components/StudiesCard'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import { FaBolt } from "react-icons/fa";
import { RefsProvider } from "./utils/RefsContext";
import { useState, useEffect } from "react";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="full-page-spinner">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
          <FaBolt className="loading-icon" />
        </div>
      ) : (
      <RefsProvider>
        <Header />
        <Banner />
        <CardsContainer />
        <DescriptionCard />
        <TechRoller />
        <ServicesCard />
        <StudiesCard />
        <ScrollToTop />
        <Footer />
      </RefsProvider>
      )}
    </>
  )
}

export default App
