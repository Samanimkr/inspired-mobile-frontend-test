import React, { Component } from 'react';

type Props = {
    names: Array<string>,
};

const generateRandomNum = (max: number) => Math.floor(Math.random() * max);

class RandomNameSelector extends Component<Props> {
    state = {
        selectedName: "",
        showAlert: false,
    };

    onRandomlySelectName() {
        if (this.props.names.length < 2) {
            this.setState({ showAlert: true });
            return;
        };
    
        let randomName = this.state.selectedName;
        let randomNum = 0;

        while(randomName === this.state.selectedName) {
            randomNum = generateRandomNum(this.props.names.length);
            randomName = this.props.names[randomNum];
        }

        this.setState({ selectedName: randomName, showAlert: false });
    }

    render() {
        return (
            <div>
                {this.state.showAlert && (
                    <div className="alert alert-danger" role="alert">
                        Please add some names to the list before trying to randomly select a name.
                    </div>
                )}
                

                <button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={() => this.onRandomlySelectName()}
                >
                    Select a random name 
                </button>

                <span>{this.state.selectedName ? this.state.selectedName : "name..."}</span>
            </div>
        );
    }
}

export default RandomNameSelector;