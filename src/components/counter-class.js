import React, { Component } from "react";

export default class CounterClass extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
            error: ""
        }
        this.incrAgain = this.incrAgain.bind(this);
    }

    incr = () => {
        if (this.state.counter >= 10) {
            this.setState({
                error: "Counter should not be greater than 10."
            })
            return;
        } else if (this.state.error.trim() !== "") {
            this.setState({
                error: ""
            })
        }
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decr = () => {
        if (this.state.counter === 0) {
            // this.setError("Counter should not be negative!");
            this.setState({
                error: "Counter should not be negative!"
            })
            return;
        } else {
            this.setState({
                error: ""
            })
        }
        this.setState({
            counter: this.state.counter - 1
        });
    }

    incrAgain() {
        this.setState({
            counter: this.state.counter + 2
        })
    }

    render() {
        return (
            <div>
                <h2>Counter Class</h2>
                {
                    this.state.error.length > 0 && <div className="error">{this.state.error}</div>
                }
                <h2>{this.state.counter}</h2>
                <button onClick={this.incr}>+</button>
                <button onClick={this.decr}>-</button>
                <button onClick={this.incrAgain}>++</button>
            </div >
        )
    }
}