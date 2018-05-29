import React from 'react';


export default function QuestionForm(props) {
    return (
        <div className="question-form">
            <div className='image'>
                <img src={props.propQuestion.img_url} alt="meme"/>
            </div>
            <form 
                className="form">
                <input type="text" id="answer"placeholder="name this meme"/>
                <button type="submit" onClick={() => props.onClick(document.getElementById('answer').value)}>+</button>
            </form>
            <button onClick={()=>props.proploadNext()}>NEXT</button>
        </div>

    )
}

//must inject image inside react component
