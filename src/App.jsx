import './App.css'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import Services from './components/services/Services'
import Slider from './components/slider/SliderImg'
import HeaderSocial from './components/top_header/HeaderSocial'
import Welcome from './components/welcome/welcome'

function App() {
  
  return (
    <>
     <HeaderSocial></HeaderSocial>
     <Header></Header>
     <Banner></Banner>
     <Welcome></Welcome>
     <Slider></Slider>
     <Services></Services>
    </>
  )
}

export default App
