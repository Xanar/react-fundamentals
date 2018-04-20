import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root.component';
class App extends Component {
    render() {
        return (
            <Router>
                <Root />
            </Router>
        );
    }
}

export default App;
