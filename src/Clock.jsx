import React from "react";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString() };
    }

    render() {
        return (
            <div>
                <p>{ this.state.date }</p>
            </div>);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.createNewDate();
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    createNewDate() {
        this.timerId = setInterval(() => { this.setState({ date: new Date().toLocaleTimeString() }) }, 1000);
    }
}