import React from 'react';
import './questionform.css'

export default function QuestionForm(props) {
    
    return (
        <div className="question-form">
            <div className='image'>
                <img className="meme-pics" src={props.propQuestion.img_url} alt="meme"/>
            </div>
            <form 
                onSubmit={(event) =>{ 
                    event.preventDefault()
                    props.onSubmit({answer: event.target.answer.value, question:props.propQuestion.img_url})}}
                className="form">
                
                <input type="text" name="answer" id="answer" placeholder="name this meme"/>
                <button type="submit">+</button>
            </form>
            <br/>
            <br/>
            <button onClick={()=>props.proploadNext()}>NEXT</button>
        </div>

    )
}

//**** state for isHidden = true
//onClick for + button changing isHidden = false
//next if this.state === idHidden, show button 