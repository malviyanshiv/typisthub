import React from "react";
import ReactDOM from "react-dom";
import TypeRacer from "./components/TypeRacer";
import "./styles/app.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 3,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const seconds = this.state.seconds;
            if (seconds > 0) {
                this.setState(() => ({
                    seconds: seconds - 1,
                }));
            }

            if (seconds === 0) {
                clearInterval(this.interval);
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                {this.state.seconds === 0 ? (
                    <TypeRacer />
                ) : (
                    <h1>{this.state.seconds}</h1>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
