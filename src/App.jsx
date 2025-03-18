import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import CardsContainer from './Components/CardsContainer'
import DescriptionCard from './Components/DescriptionCard'
import ValoresCard from './Components/ValoresCard'
import StudiesCard from './Components/StudiesCard'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import { RefsProvider } from "./utils/RefsContext";

function App() {

  return (
    <>
      <RefsProvider>
        <Header />
        <Banner />
        <CardsContainer />
        <DescriptionCard />
        <ValoresCard />
        <StudiesCard />
        <ScrollToTop />
        <Footer />
      </RefsProvider>
    </>
  )
}

export default App
