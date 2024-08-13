import FrontNav from '../components/FrontNav'
import HeroSection from '../components/HeroSection'
import Hero from '../components/Hero'
import Bottom from '../components/Bottom'

// import './App.css'





function App() {


  return (
      <div className='w-full h-full '>
        <header >
          <FrontNav/>
        </header>
        <section>
          < HeroSection/>
        </section>
        <section>
          <Hero/>
        </section>
        <footer>
          <Bottom/>
        </footer>
      </div>
  )
}

export default App
