import {timeout} from './Util.js'

const openChargeMapUrl = "https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=10&compact=true&verbose=false&latitude=52.520008&longitude=13.404954&distance=10&distanceunit=KM";
export default{
    getUrl: () => {
        return openChargeMapUrl;
    },
    fetchOpenChargeData: async () => {
        let data = [];
        await timeout(100000, fetch(openChargeMapUrl))
            .then(response => response.json())
            .then(json => {
                data = json;
            }).catch(error => {
                console.error('Error fetching openChargeData:', error);
                return Promise.reject(error);
            });

        return Promise.resolve(data);
    }
}

