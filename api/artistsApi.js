const axios = require("axios");
const {apiKey} = require("../constants");

async function getArtistByName(name) {
    return await axios.patch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${name}&api_key=${apiKey}&format=json`, {})
}

module.exports = [
    getArtistByName()
]