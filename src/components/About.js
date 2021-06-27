import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button><a style={{color:"#FFF"}} href='https://sites.google.com/view/comingsoonpcs/coming-soon'>{props.button}</a></button>
            </div>
            
        </div>
    )
}

export default About;
