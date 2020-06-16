import React, {Component} from "react";
import './App.css';
import ApiHelper from './Helpers/Api';
import Map from './Components/Map';
import Marker from './Components/Marker'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            openChargeData: [],
        };

        this.generateMarkers = this.generateMarkers.bind(this);
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

    generateMarkers() {
        let markers = [];

        this.state.openChargeData.forEach((item, index) => {
            markers.push(<Marker lat={item.AddressInfo.Latitude} lng={item.AddressInfo.Longitude} />)
        });

        return markers;
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    Electric car charging stations
                </header>
                <body>
                {this.state.isLoaded ? "LOADED" : "not Loaded"}
                <Map markers={this.generateMarkers()} />
                </body>
            </div>
        );
    }
}

export default App;
