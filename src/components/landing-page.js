import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './landing-page.css';
// import IconButton from 'material-ui/IconButton';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <img className="yao" src="https://vignette.wikia.nocookie.net/cardfight/images/c/cb/Yao-ming-meme.jpg/revision/latest?cb=20150317072431" alt="yao ming" />
            <p>A meme acts as a unit for carrying cultural ideas and references. <br/>
            They are a viral phenomenon that evolve analogous to that of a biological evolution.<br/>
            Essentially internet greatness. Enjoy learning the names of some dank memes with space repitition</p>
            <LoginForm />
            <div className="link">
               <Link to="/register">Register</Link>
               <br/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
