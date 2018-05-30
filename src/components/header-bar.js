import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header.css'
export class HeaderBar extends React.Component {
    logOut() {
        this
            .props
            .dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
        }
        return (
            <div>
                <header>
                    <h1 className="banner">What do you MEME ?
                    </h1>
                </header>
                <div className="logout-button">
                    {/* <h1>PIC</h1> */}
                    {logOutButton}
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
