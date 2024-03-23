const request = require('request')
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

const fetchBreedDescription = function(breedName, callback) {

  request(`${url}`, (error, response, body) => {
    if(error) {
      callback(`Failed to request details: ${error}`, null)
    }
  
    const data = JSON.parse(body);
    console.log(data)
  
    if(0 < data.length) {
      callback(null, data[0].description)
    } else {
      callback(`Breed not found");
    }
  })
  
};

module.exports = fetchBreedDescription