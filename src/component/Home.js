import React from 'react'
import "./Home.css"
import {Link} from "react-scroll"


const Home = () => {
  return (
    <div id="home" className='comp'>
      <div className='landing bg'>
        <div className='animation'>
        <h1>
          Hi, welcome to my website
        </h1>
        <Link className='btn-animation' to="about" spy={true} smooth={true} offset={-30} duration={500}>
          <button className="discover">
           Discover 
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Home