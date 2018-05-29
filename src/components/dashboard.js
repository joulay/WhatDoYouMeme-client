import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
// import {fetchProtectedData} from '../actions/protected-data';
import { fetchQuestion, fetchLoad } from '../actions/question';
import QuestionForm from './questionForm';
 
export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
            this.state={
                currentQuestion:0
            }
            this.loadNext=this.loadNext.bind(this) //take load next to place as same level as everything else
    }
    
    componentDidMount() {
        this.props.dispatch(fetchQuestion());
    }

    loadNext(){
        this.props.dispatch(fetchLoad(this.props.questionArray[this.state.currentQuestion]));
        this.setState({
            currentQuestion: this.state.currentQuestion+1
        })
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                {/* <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
                <QuestionForm proploadNext={this.loadNext} propQuestion={this.props.currentQuestion}/>
            </div>
        );  
    }   
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(state)
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.fullname}`,
        // protectedData: state.protectedData.data
        questionArray: state.auth.currentUser.question,
        currentQuestion: state.question.currentQuestion
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
