

import './App.css'
import TopRectangle from './container/TopRectangle'
import LandingPage from './container/LandingPage'
import Slider from './container/Slider'
import Footer from './container/Footer'
import Navbar from './container/Navbar'

function App() {

  return (
    <>
     <div className="app">
     <TopRectangle />
     <Navbar />
     <LandingPage />
     <Slider />
     <Footer />

     </div>
    </>
  )
}

export default App
