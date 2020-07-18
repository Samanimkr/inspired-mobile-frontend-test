import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddName from './components/AddName';
import NamesList from './components/NamesList';

class Index extends Component {
    state = {
        names: [],
    };

    render() {
        return (
            <div className="container">
                <h1>Inspired Mobile Front-End Test</h1><br/>

                <AddName
                    onAddName={(name: Text) => {
                        this.setState({ names: [...this.state.names, name] })
                    }}
                />

                <NamesList
                    names={this.state.names}
                    onRemoveName={(name: Text) => {
                        const names = this.state.names;
                        names.splice(names.findIndex(item => item === name), 1);

                        this.setState({ names });
                    }}    
                />
                
                <br></br>
                <p className="text-muted">
                    Allow the user to add and remove names to and from a list<br/>
                    press a button to randomly pick a name from the list<br/>
                    The same name should not be picked twice in a row<br/>
                    The name picked should be displayed in an easy to read way for the user.<br/><br/>

                    It should also fit the following criteria:<br/>
                    • Must compile without errors<br/>
                    • Includes some form of state management<br/>
                    • Compiled code should run on Internet Explorer 11+<br/>
                    • Should utilise Webpack<br/>
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));