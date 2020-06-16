import {timeout} from './Util.js'

const openChargeMapUrl = "https://api.openchargemap.io/v3/poi/?output=json&countrycode=DE&maxresults=10&compact=true&verbose=false&latitude=52.520008&longitude=13.404954&distance=10&distanceunit=KM";
const APITimeout = 10000;
export default{
    getUrl: () => {
        return openChargeMapUrl;
    },
    fetchOpenChargeData: async () => {
        let data = [];
        await timeout(APITimeout, fetch(openChargeMapUrl))
            .then(response => response.json())
            .then(json => {
                data = json;
            }).catch(error => {
                console.error('Error fetching openChargeData:', error);
                return Promise.reject(error);
            });

        return Promise.resolve(data);
    },
    getChargeData: () => { // Function used for development as quicker to fetch
        return Promise.resolve(JSON.parse('[\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 65825,\n' +
            '"UUID": "13BCA65C-8A6F-4996-995E-84207E2E4424",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 214,\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 66171,\n' +
            '"Title": "Spandauer Straße",\n' +
            '"AddressLine1": "Spandauer Straße",\n' +
            '"AddressLine2": "Mitte",\n' +
            '"Town": "Berlin",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10178",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.5208455657791,\n' +
            '"Longitude": 13.4039381981476,\n' +
            '"AccessComments": "24/7 nutzbar mit The New Motion Ladekarte oder von Roamingpartnern. 2 nicht reservierte Parkplätze am Straßenrand neben der grauen Ladesäule vor dem gelben Schild \\"Berlin Dungeon\\". ",\n' +
            '"Distance": 0.11574725196875496,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 90969,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 11,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 2\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 2,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2016-04-28T07:41:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2016-04-28T07:40:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 47290,\n' +
            '"UUID": "C9253502-979B-4B07-89B3-D8B5E665131D",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 45,\n' +
            '"UsageTypeID": 1,\n' +
            '"UsageCost": "0",\n' +
            '"AddressInfo": {\n' +
            '"ID": 47636,\n' +
            '"Title": "Parkhaus Radisson Blu",\n' +
            '"AddressLine1": "Karl-Liebknecht-Straße 3",\n' +
            '"AddressLine2": "Mitte",\n' +
            '"Town": "Alt-Berlin",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10178",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.51926694894463,\n' +
            '"Longitude": 13.403098212601448,\n' +
            '"ContactTelephone1": "+49 30 238 280",\n' +
            '"AccessComments": "Im öffentlichen Parkhaus, dieser Ladeplatz ist für Gäste des Radisson Blu und gleichzeitig Frauenparkplatz, daher auch mal zugeparkt. Kann jedoch im Radisson Blu reserviert werden. Parkgebühren 2€/h bis 20€/Tag.\\r\\nAnfahrt: Nach der Einfahrt rechts, dann 2x links.",\n' +
            '"RelatedURL": "http://www.radissonblu.de/hotel-berlin/serviceleistungen",\n' +
            '"Distance": 0.15018769617068634,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 58299,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 11,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 1\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 1,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2015-05-24T10:42:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2015-05-24T10:42:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 38402,\n' +
            '"UUID": "D67A88CB-D9EA-4B5E-8EBB-1EF5B8A24F28",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 105,\n' +
            '"OperatorsReference": "Essent EM-DE-11000000-01-00002",\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 38748,\n' +
            '"Title": "Jüdenstrasse 1",\n' +
            '"AddressLine1": "Jüdenstrasse 1",\n' +
            '"Town": "Berlin",\n' +
            '"Postcode": "10178",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.51886749783287,\n' +
            '"Longitude": 13.40899786623571,\n' +
            '"RelatedURL": "http://www.essent.nl",\n' +
            '"Distance": 0.3015740682717617,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 41913,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 32,\n' +
            '"Voltage": 230,\n' +
            '"PowerKW": 22,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 1\n' +
            '},\n' +
            '{\n' +
            '"ID": 49659,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 32,\n' +
            '"Voltage": 230,\n' +
            '"PowerKW": 22,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 1\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 2,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2015-03-20T17:03:00Z",\n' +
            '"DataQualityLevel": 3,\n' +
            '"DateCreated": "2015-01-09T06:07:00Z",\n' +
            '"SubmissionStatusTypeID": 100\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 47289,\n' +
            '"UUID": "B9403BF5-A7ED-4247-AE1A-6CB5EB576E79",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 45,\n' +
            '"UsageTypeID": 1,\n' +
            '"UsageCost": "0",\n' +
            '"AddressInfo": {\n' +
            '"ID": 47635,\n' +
            '"Title": "Klosterstraße",\n' +
            '"AddressLine1": "Klosterstraße 71",\n' +
            '"AddressLine2": "Mitte",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10179",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.51771281821817,\n' +
            '"Longitude": 13.412332777099092,\n' +
            '"AccessComments": "Rote Ladesäule \\"1163\\" mit 2 Parkplätzen, davon einer für Flinkster Carsharing-Fahrzeuge reserviert. Keine Ladekarte erforderlich, immer nutzbar.",\n' +
            '"Distance": 0.5607119095720715,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 58298,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 11,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 2\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 1,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2015-05-24T10:37:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2015-05-24T10:37:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 38391,\n' +
            '"UUID": "1BEF1526-5148-4393-A73E-93AA2DA63A5E",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 105,\n' +
            '"OperatorsReference": "Essent EM-DE-11000000-01-00034",\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 38737,\n' +
            '"Title": "Neue Jüdenstraße 1",\n' +
            '"AddressLine1": "Neue Jüdenstraße 1",\n' +
            '"Town": "Berlin",\n' +
            '"Postcode": "10117",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.51579,\n' +
            '"Longitude": 13.41046,\n' +
            '"Distance": 0.5989806696544021,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 41902,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"LevelID": 2,\n' +
            '"PowerKW": 11\n' +
            '},\n' +
            '{\n' +
            '"ID": 49652,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"LevelID": 2,\n' +
            '"PowerKW": 11\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 1,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2015-04-12T19:23:00Z",\n' +
            '"DataQualityLevel": 3,\n' +
            '"DateCreated": "2015-01-09T06:07:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 7668,\n' +
            '"UUID": "77EA6B9F-AC8A-413E-9D16-8788F6A568A9",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 156,\n' +
            '"UsageTypeID": 5,\n' +
            '"AddressInfo": {\n' +
            '"ID": 7565,\n' +
            '"Title": "Parkhaus Alexa",\n' +
            '"AddressLine1": "Grunerstraße 20 ",\n' +
            '"Town": "Berlin",\n' +
            '"Postcode": "10179 ",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.51998,\n' +
            '"Longitude": 13.41475,\n' +
            '"ContactTelephone1": "+49 (0) 1805 - 903310",\n' +
            '"ContactEmail": "service@apcoa.de",\n' +
            '"AccessComments": "Die vier Parkplätze befinden sich im Bereich A14 direkt hinter der Mauer der Einfahrt. Man muss also eine Ehrenrunde links herumfahren...\\r\\nParkgebühren 1€ pro Stunde, ab 4. Stunde 1.50€, maximal 10€. Täglich von 7Uhr bis 1 Uhr nachts geöffnet.",\n' +
            '"RelatedURL": "http://www.apcoa.de/de/parkhaus-suchen/details/name/Alexa/apcoa/433/city/Berlin.html?no_cache=1",\n' +
            '"Distance": 0.6628085323202262,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 83400,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 11,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 4\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 4,\n' +
            '"DateLastConfirmed": "2011-11-02T12:56:00Z",\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2016-03-29T07:29:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2011-11-02T12:56:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 74908,\n' +
            '"UUID": "4176ADFB-5DC2-48A6-8469-DF061605AB20",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 103,\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 75254,\n' +
            '"Title": "Alexanderstraße",\n' +
            '"AddressLine1": "Alexanderstraße 4",\n' +
            '"Town": "Berlin",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10178",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.52275975921836,\n' +
            '"Longitude": 13.41390533093568,\n' +
            '"AccessComments": "Nutzbar mit The New Motion, PlugSurfing, ChargeNow Ladekarten, PlugSurfing App und anderen.",\n' +
            '"RelatedURL": "http://www.allego.eu/",\n' +
            '"Distance": 0.678538276118972,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 108075,\n' +
            '"ConnectionTypeID": 2,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 3,\n' +
            '"PowerKW": 50,\n' +
            '"CurrentTypeID": 30,\n' +
            '"Quantity": 1\n' +
            '},\n' +
            '{\n' +
            '"ID": 108076,\n' +
            '"ConnectionTypeID": 33,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 3,\n' +
            '"PowerKW": 50,\n' +
            '"CurrentTypeID": 30,\n' +
            '"Quantity": 1\n' +
            '},\n' +
            '{\n' +
            '"ID": 108077,\n' +
            '"ConnectionTypeID": 1036,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 3,\n' +
            '"Amps": 63,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 43,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 1\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 2,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2016-12-07T13:10:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2016-12-07T13:10:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 87439,\n' +
            '"UUID": "3ED6B656-9962-470B-BF0A-B3F5306743F3",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 214,\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 87785,\n' +
            '"Title": "Karl-Liebknecht-Straße",\n' +
            '"AddressLine1": "Karl-Liebknecht-Straße 29",\n' +
            '"AddressLine2": "Mitte",\n' +
            '"Town": "Berlin",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10178",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.524438232115585,\n' +
            '"Longitude": 13.412951344982966,\n' +
            '"AccessComments": "24/7 nutzbar mit 2 kostenlosen Parkplätzen.",\n' +
            '"Distance": 0.7317356818500635,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 123951,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 400,\n' +
            '"PowerKW": 11,\n' +
            '"CurrentTypeID": 20,\n' +
            '"Quantity": 2\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 2,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2017-05-08T07:17:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2017-05-08T07:17:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 38390,\n' +
            '"UUID": "66FEC87F-A49E-4FD9-952F-BD704FCCF45F",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 105,\n' +
            '"OperatorsReference": "Essent EM-DE-11000000-01-00035",\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 38736,\n' +
            '"Title": "Französische Straße 33",\n' +
            '"AddressLine1": "Französische Straße 33",\n' +
            '"Town": "Berlin",\n' +
            '"Postcode": "10117",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.515556,\n' +
            '"Longitude": 13.395833,\n' +
            '"Distance": 0.7911717667130239,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 41901,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"LevelID": 2,\n' +
            '"PowerKW": 11\n' +
            '},\n' +
            '{\n' +
            '"ID": 49651,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"LevelID": 2,\n' +
            '"PowerKW": 11\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 1,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2015-04-12T19:02:00Z",\n' +
            '"DataQualityLevel": 3,\n' +
            '"DateCreated": "2015-01-09T06:07:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '},\n' +
            '{\n' +
            '"IsRecentlyVerified": false,\n' +
            '"ID": 68665,\n' +
            '"UUID": "01C15B16-CFE5-423D-89B7-183AAF1CBDB6",\n' +
            '"DataProviderID": 1,\n' +
            '"OperatorID": 2244,\n' +
            '"UsageTypeID": 4,\n' +
            '"AddressInfo": {\n' +
            '"ID": 69011,\n' +
            '"Title": "Ubitricity Ladelaterne",\n' +
            '"AddressLine1": "Markgrafenstraße 44",\n' +
            '"AddressLine2": "Mitte",\n' +
            '"Town": "Berlin",\n' +
            '"StateOrProvince": "Berlin",\n' +
            '"Postcode": "10117",\n' +
            '"CountryID": 87,\n' +
            '"Latitude": 52.515760620459545,\n' +
            '"Longitude": 13.393046093254064,\n' +
            '"AccessComments": "Spezielles Ladekabel mit Abrechnungseinheit von ubitricity notwendig, damit 24/7 nutzbar.",\n' +
            '"Distance": 0.9339484376086954,\n' +
            '"DistanceUnit": 1\n' +
            '},\n' +
            '"Connections": [\n' +
            '{\n' +
            '"ID": 96291,\n' +
            '"ConnectionTypeID": 25,\n' +
            '"StatusTypeID": 50,\n' +
            '"LevelID": 2,\n' +
            '"Amps": 16,\n' +
            '"Voltage": 230,\n' +
            '"PowerKW": 3.7,\n' +
            '"CurrentTypeID": 10,\n' +
            '"Quantity": 1\n' +
            '}\n' +
            '],\n' +
            '"NumberOfPoints": 1,\n' +
            '"StatusTypeID": 50,\n' +
            '"DateLastStatusUpdate": "2016-06-15T06:59:00Z",\n' +
            '"DataQualityLevel": 1,\n' +
            '"DateCreated": "2016-06-15T06:59:00Z",\n' +
            '"SubmissionStatusTypeID": 200\n' +
            '}\n' +
            ']'));
    }
}

