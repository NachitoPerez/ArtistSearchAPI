const axios = require("axios");
const artistNames = require("../data");
const {apiKey} = require("../constants");

const getArtistByName = async (req, res, next) => {
    const artistName = req.query.name;
    console.log("Artist Name: ", artistName);

    try {
        axios.patch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${apiKey}&format=json`, {})
            .then(result => {
                if(result.data.results['opensearch:totalResults'] > 0){
                    res.status(200).send(result.data);
                } else {
                    const randArtist = artistNames[Math.floor(Math.random() * artistNames.length)];
                    //data.filter(art => art.name.includes(artistName))
                    axios.patch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${randArtist}&api_key=${apiKey}&format=json`, {})
                        .then(result2 => res.status(200).send(result2.data));
                }
            })
    } catch (error) {
        console.error(error)
        next(ApiError.internalError("Internal error when searching the artist"));
    }
}

module.exports = {
    getArtistByName
}
