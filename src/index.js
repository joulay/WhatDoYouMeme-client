import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <App/>
        </MuiThemeProvider>
    </Router>

</Provider>, document.getElementById('root'));
