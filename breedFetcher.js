const needle = require("needle");

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, _response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("No cats found", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };