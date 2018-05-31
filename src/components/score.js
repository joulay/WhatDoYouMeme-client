import React from 'react';
import { connect } from 'react-redux';

export function Score(props) {
    return (
        <div className="score">
            <p>Correct: {props.correct}</p>
            <p>Incorrect: {props.incorrect}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        correct: state.auth.currentUser.score,
        incorrect: state.auth.currentUser.wrongTally
    }
}

export default connect(mapStateToProps)(Score);