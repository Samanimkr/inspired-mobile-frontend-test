import React, { Component } from 'react';

type Props = {
    onAddName: Function,
};

class AddName extends Component<Props> {
    state = {
        inputValue: "",
        showAlert: false,
    };

    render() {
        return (
            <div>
                {this.state.showAlert && (
                    <div className="alert alert-danger" role="alert">
                        Please enter a name before trying to add it to the list.
                    </div>
                )}

                <label>Enter name to add:</label>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        className="form-control"
                        value={this.state.inputValue}
                        onChange={e => this.setState({ inputValue: e.target.value })}
                    />

                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => {
                                if (this.state.inputValue === "") {
                                    this.setState({ showAlert: true });
                                    return;
                                }

                                this.props.onAddName(this.state.inputValue);
                                this.setState({ inputValue: '', showAlert: false });
                            }}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddName;