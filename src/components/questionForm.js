import React from 'react';

export default class QuestionForm extends React.Component {
    onSubmit(values) {

    }

    render() {
    return (
        <div className="question-form">
            <div className='image'>
                <img src={this.props.image} alt="meme"/>
            </div>
            <form 
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
                className="form">
                <input type="text" placeholder="name this meme"/>
                <button type="submit">+</button>
            </form>
        </div>

    )
    }
}