const request = require('request')
const breedName = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(`${url}`, (error, response, body) => {
  if(error) {
    onsole.error("Error", error)
  }

  const data = JSON.parse(body);
  console.log(data)

  if(data.length > 0) {
    console.log(data[0].description)
  } else {
    console.log("Breed not found");
  }
})