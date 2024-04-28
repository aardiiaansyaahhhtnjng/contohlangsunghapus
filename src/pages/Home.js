import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Portfolio />
      <Contact />
    </div>

  )
}

export default Home