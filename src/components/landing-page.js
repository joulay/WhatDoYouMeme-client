import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>WHAT DO YOU MEME?</h2>
            <p>A meme acts as a unit for carrying cultural ideas and references. <br/>
            They are a viral phenomenon that evolve analogous to that of a biological evolution.<br/>
            Essentially internet greatness. Enjoy learning the names of some dank memes with space repitition</p>
            <LoginForm />
            <Link  to="/register">Register</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
