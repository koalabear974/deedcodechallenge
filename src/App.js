import React, {Component} from "react";
import './App.css';
import ApiHelper from './Helpers/Api';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            openChargeData: [],
        }
    };

    componentDidMount() {
        // ApiHelper.fetchOpenChargeData().then(openChargeData => {
        ApiHelper.getChargeData().then(openChargeData => {
            console.log("loaded", openChargeData);
            this.setState({
                isLoaded: true,
                openChargeData: openChargeData,
            })
        }).catch(e => {
            // TODO: Manage error when unable to fetch data
        });
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    Electric car charging stations
                </header>
                <body>
                {this.state.isLoaded ? "LOADED" : "not Loaded"}
                </body>
            </div>
        );
    }
}

export default App;
