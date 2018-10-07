import {Observable} from "rxjs";
const monk = require('monk');
const db = monk('mongodb://localhost:27017/NewSony');
const contentItems = db.get('contentItem');
const endpoint = "http://micrositeifd.azurewebsites.net/api/v1/e133e328-fe05-46bc-b378-04e4ad7cc995//content/categories/272";
const request = require('request-promise');
const axios = require('axios');
const fetch = require('node-fetch');

// WHATS COVERED BELOW



//PROMISES
// export const fetchDataWithPromises = () => {
//     console.log('fetchDataWithPromises');
//     return new Promise(function(resolve, reject) {
//         if (resolve) {
//             contentItems.find({}).then( (doc) => {
//                 resolve(doc);}
//                 )
//         }
//         else {reject(Error("It broke"));}
//     });
// }

//STREAMS HTTP
// export const fetchDataWithStreams = () => {
//     console.log('fetchDataWithStream');
//     http.get(endpoint, function(res) {
//                 res.on('data', function(chunk) {
//                     // console.log('chunk', chunk);
//                 });
//                 res.on('end', function() {
//                     // console.log('Stream Finished');
//                 });
//             });
// }


//STREAMS REQUEST
// export const fetchDataWithRequest = () => {
//     var s = request(endpoint);
// }


// export const fetchDataWithObservables = () => {
//     return Observable.create( ( observer ) => {
//         axios.get( endpoint)
//             .then( ( response ) => {
//                 observer.next( response.data );
//                 observer.complete();
//             } )
//             .catch( ( error ) => {
//                 observer.error( error );
//             } );
//     });
// }

// ASYNC AWAIT

export const fetchDataWithAsyncAwait = async () => {

    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        return json;

    }catch(err){
        console.log( 'err', err );
    }
}


