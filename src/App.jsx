import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import CardsContainer from './Components/CardsContainer'
import DescriptionCard from './Components/DescriptionCard'
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
        <ScrollToTop />
        <Footer />
      </RefsProvider>
    </>
  )
}

export default App
