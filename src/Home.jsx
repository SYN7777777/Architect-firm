import React from 'react'
import Banner from './Banner'
import Custom from './custom'
import Show from './show'
import Services from './Services'
import Header from './Header'
import Testimonial from './Testimonals'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
    <Header/> 
    <Custom/>
    <Show/>
    <Services/>
    <Testimonial/>
        
    </div>
  )
}

export default Home
