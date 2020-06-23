import React from "react";
import ReactDOM from "react-dom";
import GameLauncher from "./components/GameLauncher";
import "./styles/app.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            isSubmitted: false,
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        const name = e.target.value;
        this.setState({
            name,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        name.trim();
        if (name.length === 0) {
            return alert("Please enter the name");
        }
        this.setState({
            isSubmitted: true,
        });
    };

    render() {
        return (
            <div>
                {this.state.isSubmitted ? (
                    <GameLauncher user={this.state.name} />
                ) : (
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.onChange}
                            placeholder="Enter your alias"
                        />
                        <button>Play</button>
                    </form>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
