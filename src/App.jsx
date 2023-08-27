import NavBar from './Components/NavBar/NavBar'
import SocialLinks from './Components/Social/SocialLinks'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Experience from './Pages/Experience'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'


function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </>
  )
}

export default App
