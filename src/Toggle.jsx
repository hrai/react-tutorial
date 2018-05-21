import React from 'react';

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> { this.state.toggle ? "ON" : "OFF" }</button>
            </div>
        );
    }
}