import './App.css'
import About from './components/about/About'
import Banner from './components/banner/Banner'
import Blog from './components/blog/Blog'
import Brands from './components/brands/brands'
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
     <About></About>
     <Brands></Brands>
     <Blog></Blog>
    </>
  )
}

export default App
