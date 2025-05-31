import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Blog from './components/blog/Blog'
import Brands from './components/brands/brands'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Map from './components/map/Map'
import Services from './components/services/Services'
import Slider from './components/slider/SliderImg'
import HeaderSocial from './components/top_header/HeaderSocial'
import Welcome from './components/welcome/welcome'

function App() {
  
  return (
    <>
     <HeaderSocial/>
     <Header/>
     <Banner/>
     <Welcome/>
     <Slider/>
     <Services/>
     <About/>
     <Brands/>
     <Blog/>
     <Map/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
