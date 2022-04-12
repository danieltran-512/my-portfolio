import React from 'react'
import './ProjectItem.css'
import Youtube from './Youtube';

const ProjectItem = (props) => {

    const {item} = props;

    let url = '';

    if(item.url) 
        url = item.url.concat('??rel=0&modestbranding=0&autohide=1&showinfo=0&controls=0&playlist=').concat(item.url).concat('&loop=1&autoplay=1&mute=1&enablejsapi=1');
    
    // const url = item.url.concat('?rel=0&modestbranding=0&autohide=1&showinfo=0&controls=0&autoplay=1&mute=1&enablejsapi=1');

    return (
        <div className='container'>
            <div className={item.url?'video':'no-video'}>
                {item.url && <Youtube url={url}/>}
            </div>
            <br/>
            <div>
                <h2>{item.title}</h2>
                <p style={{fontFamily:'monospace'}}>Language/Tools: {item.language}</p>
                <p className='desc'>{item.description}</p>
                <div className='links'>
                    {item.github ?
                    <a className="button link" href={item.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    : <button className='button link inactive'>GitHub (Unavailable)</button>}
                    {item.livedemo ?
                    <a className='button link' href={item.livedemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    : <button className='button link inactive'>Live Demo (Unavailable)</button>}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem