const data = require("../data");
const getArtistByName = async (req, res, next) => {
    const artistName = req.params.name;
    console.log(artistName)

    try {
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
