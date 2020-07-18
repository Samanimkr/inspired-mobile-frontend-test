import React, { Component } from 'react';

type Props = {
    onAddName: Function,
};

class AddName extends Component<Props> {
    state = {
        inputValue: "",
    };

    render() {
        return (
            <div>
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
                                this.props.onAddName(this.state.inputValue);
                                this.setState({ inputValue: '' });
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