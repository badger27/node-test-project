import {Observable} from "rxjs";
const monk = require('monk');
const db = monk('mongodb://localhost:27017/NewSony');
const contentItems = db.get('contentItem');
const endpoint = "http://micrositeifd.azurewebsites.net/api/v1/5e3e99a0-edf1-4cf0-a939-f4b3032ddd8d/content/categories/423";
const request = require('request-promise');
const axios = require('axios');



//PROMISES
export const fetchDataWithPromises = () => {
    console.log('fetchDataWithPromises');
    return new Promise(function(resolve, reject) {
        if (resolve) {
            contentItems.find({}).then( (doc) => {resolve(doc);})
        }
        else {reject(Error("It broke"));}
    });
}

//STREAMS HTTP
export const fetchDataWithStreams = () => {
    console.log('fetchDataWithStream');
    http.get(endpoint, function(res) {
                res.on('data', function(chunk) {
                    console.log('chunk', chunk);
                });
                res.on('end', function() {
                    console.log('Stream Finished');
                });
            });
}


//STREAMS REQUEST
export const fetchDataWithRequest = () => {
    var s = request(endpoint);
}


export const fetchDataWithObservables = () => {
    return Observable.create( ( observer ) => {
        axios.get( endpoint)
            .then( ( response ) => {
                observer.next( response.data );
                observer.complete();
            } )
            .catch( ( error ) => {
                observer.error( error );
            } );
    });
}