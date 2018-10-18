import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';
import Words from './components/words';
import Songs from './components/songs';
import './app.css';

export default class App extends PureComponent {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Route path='/' component={Nav} />
                    <Route exact path='/' component={Words} />
                    <Route path='/songs' component={Songs} />
                </div>
            </Router>
        );
    }
}
