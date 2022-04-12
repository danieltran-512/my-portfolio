import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div id="skills" className='comp'>

      <h2 className='back-end'>Back-end</h2>
      <div className='back-end-content'>
        <h3 style={{color:'var(--primary-color)'}}>Database</h3>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
        </ul>

        <h3 style={{color:'var(--primary-color)'}}>Tools</h3>
        <ul>
          <li>NodeJS/Express</li>
        </ul>
      </div>

      <div className='right'>
        <h2>Front-end</h2>

        <div className='front-end-list'>
          <h3>Language</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>PHP</li>
            <li>SQL</li>
            <li>Java</li>
          </ul>
        </div>

        <div className='front-end-list'>
          <h3>Tools</h3>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Angular</li>
          </ul>
        </div>

        <div className='front-end-list'>
          <h3>Others</h3>
          <ul>
            <li>Adobe XD</li>
            <li>REST</li>
            <li>Git</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Skills