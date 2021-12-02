const args = process.argv.slice(2);
console.log(args);
let nameOfBreed = args[0];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds?attach_breed=${nameOfBreed}`, (error, response, body) => {
  console.log('error (Requested breed not found or Request Failed):', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(typeof body)
  
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === nameOfBreed) {
      console.log(data[i].description);
    }
  }
  
});