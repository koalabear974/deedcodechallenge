import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'

const AnyReactComponent = ({text}) => <div>{text}</div>;

const googleMapKey = 'AIzaSyD6T8zNeCCXnR0NhbSplOFvaHG6Jfa6X70';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 52.52000,
            lng: 13.404954
        },
        zoom: 15,
        markers: [],
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: googleMapKey}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {this.props.markers}
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
