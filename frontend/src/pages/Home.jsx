import React from 'react'


import Navigationbar from "../component/navbar/Navigationbar";
import Profile from "../component/Profile/Profile";
import Footer from "../component/Footers/Footer";
import Service from "../component/Services/Service";



 

function Home() {
  return (
    <>
      <Navigationbar/>
     <Profile/>
      
      
      <Service/>
      <Footer/>
     
    </>
  )
}

export default Home