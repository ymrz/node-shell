process.stdout.write('prompt > ');


const curl = require('request');

process.stdin.on('data', (data) => {
const url = data.toString().slice(4);


  curl(url, function (error, response, body) {

    console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.c

})




});
