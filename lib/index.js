import http from 'http';
import {MyClass} from './service/firstClass';
import {Observable} from "rxjs";
const endpoint = "http://micrositeifd.azurewebsites.net/api/v1/5e3e99a0-edf1-4cf0-a939-f4b3032ddd8d/content/categories/423";
const request = require('request-promise');
const dataService = require('./service/dataService');
const axios = require('axios');
const express = require('express')
const app = express();



//SERVER SET UP
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');


// PROMISES

// dataService.fetchDataWithPromises().then(function(err, result) {
//     result.forEach(function(element) {
//       console.log("ARTIST", element.artist);
//     });
//
// }, function(err) {
//     console.log(err); // Error: "It broke"
// });

/////////////


// dataService.fetchDataWithRequest();



// STREAM

// http.get(endpoint)
//     .on('response', function(response) {
//         console.log('here');
//         console.log(response.status);
//         console.log(response);
//
//         // console.log(response.headers['content-type']) // 'image/png'
//     })


// app.get(endpoint, function (req, res) {
//
//     return tree.getData(req.param('ids'))
//         .then(function (data) {
//             console.log('data',data);
//             return res.status(200).send(data)
//         }).catch(function (err) {
//             // never goes here
//             console.log(err);
//             return res.status(550).json(err);
//         });
// });



//OBSERABLES

// let observable$ = Observable.create( ( observer ) => {
//     axios.get( 'https://jsonplaceholder.typicode.com/users' )
//         .then( ( response ) => {
//             observer.next( response.data );
//             observer.complete();
//         } )
//         .catch( ( error ) => {
//             observer.error( error );
//         } );
// });

dataService.fetchDataWithObservables().subscribe( {
    next: data => console.log( '[data] => ', data ),
    complete: data => console.log( '[complete]' ),
} );
