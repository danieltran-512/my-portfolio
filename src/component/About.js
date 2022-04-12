import React from 'react'
import "./About.css"
import Typical from 'react-typical'

const About = () => {
  return (
    <div id="about">
      <div className='about-content'>
        <section className='intro'>
          <h1>.about-me</h1>
          <Typical 
            steps={
              ['Hello', 
              1000, 
              'My name is Daniel Tran.', 
              1000,
              'I love disco & funk!',
              1000,
              'I\'m very approachable!',
              500,
              'I\'m keen on expanding my knowledge in programming.',
              1500]}
            loop={Infinity}
            wrapper="p"
          />
        </section>

        <section className='educational'>
          <h1>.educational-background</h1>
          <div style={{textAlign:"justify"}}>
            <h2><strong>Bachelor of Computer and Information Sciences</strong></h2>
            <h4 style={{fontStyle:"italic"}}>Auckland University of Technology</h4>
            <p style={{fontFamily:"monospace"}}>Major: Software Development</p>
            <p style={{fontFamily:"monospace"}}>Minor: Digital Communication</p>
          </div>
        </section>

        <section className='aspiration'>
          <h1>.goals</h1>
          <p>I aspire to work as a front-end web devloper, UX/UI Designer. <br></br>I could also work as a full stack developer.</p>
        </section>
      </div>
    </div>
  )
}

export default About