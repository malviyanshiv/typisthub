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
        const name = e.target.value.trim();
        this.setState({
            name,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        if (name.length === 0) {
            return alert("Please enter your alias to practice");
        }
        this.setState({
            isSubmitted: true,
        });
    };

    render() {
        return (
            <div>
                <div className="header">
                    <div className="header__title">Welcome to typistHub</div>
                    <div className="header__subtitle">learn skill with fun</div>
                </div>
                <div className="container">
                    {this.state.isSubmitted ? (
                        <GameLauncher user={this.state.name} />
                    ) : (
                        <form onSubmit={this.onSubmit} className="user-form">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.onChange}
                                placeholder="Enter your alias"
                            />
                            <button>Practice Now</button>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
