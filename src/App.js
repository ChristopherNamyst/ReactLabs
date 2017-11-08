import React, {Component} from 'react';
import GraphBar from "./GraphBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pacVotes: 1,
            biggieVotes: 1,
        };
    }

    render() {
        return (<div className="App">
            <GraphBar label={"2pac"} value={this.state.pacVotes}/>
            <GraphBar label={"Biggie"} value={this.state.biggieVotes}/>
            <button id="biggieButton" onClick={this.handleBiggieClick.bind(this)}>Vote for Biggie</button>
            <button id="pacButton" onClick={this.handlePacClick.bind(this)}>Vote for 2Pac</button>
        </div>);
    }

    handlePacClick() {
        this.setState(prevState => ({
            pacVotes: prevState.pacVotes + 1
        }));
    }
    handleBiggieClick() {
        this.setState(prevState => ({
            biggieVotes: prevState.biggieVotes + 1
        }));
    }

    }





export default App;
