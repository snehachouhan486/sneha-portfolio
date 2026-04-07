import React from 'react'


import Navigationbar from "../componet/navbar/Navigationbar";
import Profile from "../componet/Profile/Profile";
import Footer from "../componet/Footers/Footer";
import Service from "../componet/Services/Service";



 

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