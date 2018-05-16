import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
    }

    render() {
        return (
            <div>
                <p>{ this.state.date }</p>
            </div>);
    }

    componentDidMount() {
        this.createNewDate();
    }

    createNewDate() {
        setInterval(() => { this.setState({ date: new Date().toLocaleTimeString() }) }, 1000);
    }
}