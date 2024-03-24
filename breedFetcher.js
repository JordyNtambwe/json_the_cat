const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request("https://api.thecatapi.com/v1/breeds/search?q=", (error, response, body) => {
    if (error) {
      callback(`Failed to request details: ${error}`, null);
    }
  
    const data = JSON.parse(body);
  
    if (0 < data.length) {
      callback(null, data[0].description);
    } else {
      callback(`Failed to find breed ${breedName}`, null);
    }
  });
  
};

module.exports = fetchBreedDescription;