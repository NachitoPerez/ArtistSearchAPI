const axios = require("axios");
const data = require("../data");
const {apiKey} = require("../constants");

const getArtistByName = async (req, res, next) => {
    const artistName = req.query.name;
    console.log("Artist Name: ", artistName);

    try {
        axios.patch(`https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${apiKey}&format=json`, {})
            .then(res => {
                console.log(res.data.results['opensearch:totalResults']);

            })
        const artist = data.filter(art => art.name.includes(artistName))
        console.log(artist)
        if (artist.length !== 0) {
            res.status(200).send(artist)
        } else {
            res.status(200).send(data)
        }
    } catch (error) {
        console.error(error)
        next(ApiError.internalError("Internal error when searching the artist"));
    }
}

module.exports = {
    getArtistByName
}
