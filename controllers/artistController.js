const axios = require('axios');
const artistNames = require('../data');
const {apiKey} = require('../constants');
const {Parser} = require('@json2csv/plainjs');

async function getApiArtist(name) {
  return await axios.patch(`https://ws.audioscrobbler.com/2.0/`, null, {params: {
    method: 'artist.search',
    artist: name,
    api_key: apiKey,
    format: 'json'
    }});
}

function parseToCSV(info) {
  const parser = new Parser({});
  return parser.parse(info.map((artist) => ({
    name: artist.name,
    mbid: artist.mbid,
    url: artist.url,
    image_small: artist.image.filter((img) => img.size === 'small').map((img) => ({text: img['#text']})),
    image: artist.image})));
}

const getArtistByName = async (req, res, next) => {
  let artistName = req.query.name;
  let artistFound = false;
  let result = null;

  try {
    while (!artistFound) {
      result = await getApiArtist(artistName);
      if (result.data.hasOwnProperty('results')) {
        if (result.data.results['opensearch:totalResults'] > 0) {
          artistFound = true;
          res.status(200).attachment(`${artistName}.csv`).send(parseToCSV(result.data.results.artistmatches.artist));
        } else {
          artistName = artistNames[Math.floor(Math.random() * artistNames.length)];
        }
      } else {
        throw new Error('LastFM API error');
      }
    }
  } catch (error) {
    console.error('Err: ', error);
    next(ApiError.internalError('Internal API error when searching the artist'));
  }
};

module.exports = {
  getArtistByName,
};
