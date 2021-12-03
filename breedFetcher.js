
const request = require('request');

const fetchBreedDescription = function(nameOfBreed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${nameOfBreed}`, (error, response, body) => {


    console.log('error (Requested breed not found or Request Failed):', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body)
    const data = JSON.parse(body);
    // console.log(data[0].description);


    // console.log(typeof data);
    if (error) {
      callback(error,null);
    } else {
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        console.log("data not available");
      }
    }

  });

};



module.exports = { fetchBreedDescription };