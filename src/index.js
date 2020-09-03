import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import Home from './home.js';
import List from './list';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                </div>
            </BrowserRouter>
        );

        
    }
}

ReactDom.render(<App />, document.getElementById('root'));

