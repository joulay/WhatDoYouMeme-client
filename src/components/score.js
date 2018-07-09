import React from 'react';
import { connect } from 'react-redux';

export function Score(props) {
    return (
        <div className="score">
            <p className="score-correct">correct: {props.correct}</p>
            <p className="score-incorrect">incorrect: {props.incorrect}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        correct: state.question.currentQuestion.score,
        incorrect: state.question.currentQuestion.wrongTally
    }
}

export default connect(mapStateToProps)(Score);


//******when click + dispatch action to get tally 
