import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjAbout, homeObjCollaborators, homeObjMinters} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Metaverse from '../components/Metaverse';
import Sidebar from '../components/SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjAbout}/>
      <Info {...homeObjCollaborators}/>
      <Info {...homeObjMinters}/>
      <Metaverse />
      <Footer />
    </>
  )
}

export default Home
