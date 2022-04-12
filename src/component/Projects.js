import React, { useState } from 'react'
import "./Project.css"
import ProjectItem from './Project/ProjectItem'
import {db} from "../firebase/firebase"
import { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'

export const Projects = () => {
  const [item, setItem] = useState([]);

  //Retrieve user data from the database 
  useEffect(() =>{
    const fetchProjects = async () => {
      await getDocs(collection(db, "projects"))
      .then(querySnapshot => {
        querySnapshot.docs
          .map(doc => 
            setItem(item => [...item, doc.data()])
          );
      });
      
    }

    fetchProjects();
// eslint-disable-next-line
  },[])

  const [currentProject, setCurrentProject] = useState(0);
  const length = item.reverse().length;

  const nextSlide = () => {
    setCurrentProject(currentProject === length-1 ? 0 : currentProject+1);
  }

  const prevSlide = () => {
    setCurrentProject(currentProject === 0 ? length-1 : currentProject-1);
  }

  if(!Array.isArray(item.reverse()) || item.length === 0){
    return null;
  }


  return (
    <div id="projects" className='comp'>
      <h1>&#123;$projects&#125;</h1>
      <section className='slider'>
        <FaArrowLeft className='left-arrow' onClick={prevSlide}/>
        <FaArrowRight className='right-arrow' onClick={nextSlide}/>
        {item.map((i, index) =>
          {
            return (
              <div className={index === currentProject ? "active slide":"slide"} key={index}>
                {index === currentProject &&
                (<ProjectItem item = {i}/>)}    
              </div>
            )
          } )}
      </section>
      <p>[{currentProject+1}/{item.length}]</p>
    </div>
  )
}
