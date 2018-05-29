import React from 'react';

export default class QuestionForm extends React.Component {
    render() {
    return (
        <div>
            <div className='image'>
                <img src={this.props.image} alt="meme"/>
            </div>
            <form className="userInput">
                <input type="text" placeholder="name this meme"/>
                <button type="submit">+</button>
            </form>
        </div>

    )
    }
}