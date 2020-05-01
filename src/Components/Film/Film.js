import React from 'react';

function Film(props){
    return(
        <div className='film'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div class='producerDirector'>
                <h2>Director: {props.director}</h2>
                <h2>Producer: {props.producer}</h2>
            </div>
            <h3 class='anno'>Release year: {props.year}</h3>
        </div>
    )
}





export default Film