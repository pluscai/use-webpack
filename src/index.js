import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Child from 'child';

class App extends Component {
    render() {
        return (
            <div>
                <div>Thids is App</div>
                <Child />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));