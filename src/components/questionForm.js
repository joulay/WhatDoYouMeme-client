import React from 'react';
import './questionform.css'

export default function QuestionForm(props) {
console.log('​QuestionForm -> props', props);
        
        console.log('​QuestionForm -> ', props.img_url);
    return (
        <div className="question-form">
            <div className='image'>
                <img className="meme-pics" src={props.propQuestion.img_url} alt="meme"/>
            </div>
            <form 
                onSubmit={(event) =>{ 
                    event.preventDefault()
                    this.props.onClick(document.getElementById('answer').value)}}
                className="form">
                <input type="text" id="answer"placeholder="name this meme"/>
                <button type="submit">+</button>
            </form>
            <button onClick={()=>props.proploadNext()}>NEXT</button>
        </div>

    )
}

//must inject image inside react component
