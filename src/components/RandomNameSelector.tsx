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
        const { names } = this.props;
        const { selectedName } = this.state;

        if (!names.length) {
            this.setState({ showAlert: true });
            return;
        } else if (names.length === 1) {
            this.setState({ selectedName: names[0], showAlert: false });
            return;
        };
    
        let randomName = selectedName;
        let randomNum = 0;

        while(randomName === selectedName && names.length > 1) {
            randomNum = generateRandomNum(names.length);
            randomName = names[randomNum];
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
                
                <p>Selected Name: {this.state.selectedName ? this.state.selectedName : ""}</p>

                <button
                    type="button"
                    className="btn btn-primary mr-3"
                    onClick={() => this.onRandomlySelectName()}
                >
                    Select a random name 
                </button>
            </div>
        );
    }
}

export default RandomNameSelector;