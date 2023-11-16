import Main from '../components/Main';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Services from '../components/Services';
export default function Home() {
  return (
   <div>
    <div id="main">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="doctors">
        <Team />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
