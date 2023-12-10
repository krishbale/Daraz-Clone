import './App.css'
import TopRectangle from './TopRectangle'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import ServiceButton from './ServiceButton'
import FlashSale from './FlashSale'
import Footer from './Footer'

function App() {
  return (
    <>
     <div className="app">
     <TopRectangle />
     <Navbar />
     <div className="daraz_landback">
     <LandingPage />
     <ServiceButton />
     <FlashSale />
     </div>
     <div className="daraz_footerback">
     <Footer />
     </div>
     </div>
    </>
  )
}

export default App
