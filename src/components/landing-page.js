
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }


    return (
        <div className="home">
            <img className="yao" src="https://vignette.wikia.nocookie.net/cardfight/images/c/cb/Yao-ming-meme.jpg/revision/latest?cb=20150317072431" alt="yao ming" />
        
            <p className="landing-page-info">what if i told u, <br/>
            u can enjoy learning <br/>the names of <br/>some dank memes <br/> w/ spaced repetition</p>
            
            <div className="options">
                <div className="login">
                    <Link className="login-link" to="/login">Log In</Link>
                </div>
                <div className="register">
                    <Link className="register-link" to="/register">Register</Link>
                </div>
            </div>
            <footer className="spaced-rep-info">*spaced repetition is a learning technique that utilizes increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect </footer>
        </div>
    );
}


export default LandingPage;

// import React from 'react';
// import {connect} from 'react-redux';
// import {Link, Redirect} from 'react-router-dom';

// import LoginForm from './login-form';
// import './landing-page.css';

// export function LandingPage(props) {
//     // If we are logged in redirect straight to the user's dashboard
//     if (props.loggedIn) {
//         return <Redirect to="/dashboard" />;
//     }

//     return (
//         <div className="home">
//             <img className="yao" src="https://vignette.wikia.nocookie.net/cardfight/images/c/cb/Yao-ming-meme.jpg/revision/latest?cb=20150317072431" alt="yao ming" />

//             <p className="landing-page-info">What if I told you, a meme acts as a unit for carrying cultural ideas and references. <br/>
//             They are a viral phenomenon that evolve analogous to that of a biological evolution.<br/>
//             They're essentially internet greatness. <br/>
//             Enjoy learning the names of some dank memes with space repitition</p>

//             <LoginForm />
//             <div className="register">
//                <Link className="register-link" to="/register">Register</Link>
//                <br/>
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = state => ({
//     loggedIn: state.auth.currentUser !== null
// });

// export default connect(mapStateToProps)(LandingPage);
