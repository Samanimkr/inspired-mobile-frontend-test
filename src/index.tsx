import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddName from './components/AddName';
import RandomNameSelector from './components/RandomNameSelector';
import NamesList from './components/NamesList';

class Index extends Component {
    state = {
        names: [],
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light mb-5">
                    <span className="navbar-brand mb-0 h1">Inspired Mobile Front-End Test</span>
                </nav>

                <div className="container">
                    <AddName
                        onAddName={(name: string) => {
                            this.setState({ names: [...this.state.names, name] })
                        }}
                    />

                    <NamesList
                        names={this.state.names}
                        onRemoveName={(name: string) => {
                            const names = this.state.names;
                            names.splice(names.findIndex(item => item === name), 1);

                            this.setState({ names });
                        }}    
                    />
                </div>

                <div className="container mt-5">
                    <RandomNameSelector names={this.state.names} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));