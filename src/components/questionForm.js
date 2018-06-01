import React from 'react';
import './questionform.css'

export default class QuestionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            isHidden:true
        }
    }
    showNext(){
        this.setState({
            isHidden: false
        })
    }
    render() {
    return (
        <div className="question-form">
            <div className='image'>
                <img className="meme-pics" src={this.props.propQuestion.img_url} alt="meme"/>
            </div>
            <form 
                onSubmit={(event) =>{ 
                    event.preventDefault()
                    this.props.onSubmit(event.target.answer.value)}}
                className="form">
                
                <input type="text" name="answer" id="answer" placeholder="name this meme"/>
                <button onClick={()=>this.showNext()}type="submit">+</button>
            </form>
            <br/>
            <br/>
            <button onClick={()=>this.props.proploadNext()}>NEXT</button>
        </div>

    )
    }
}

//**** state for isHidden = true
//onClick for + button changing isHidden = false
//next if this.state === idHidden, show button 