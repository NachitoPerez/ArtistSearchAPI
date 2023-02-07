const apiKey = 'ee09e3cec8f7cd051c4f63f855d5db82';
const ApplicationName =	"IncedoTest";
const sharedSecret	= "883ed8e7ce32725aeaf074ad7638fc45";
const registeredTo = "Nacho-Perez";

const apiUrl = `https://ws.audioscrobbler.com/2.0/`;
const apiArtistSearchMeth = "artist.search";
const apiTokenUrl = `https://ws.audioscrobbler.com/2.0/?method=auth.gettoken&api_key=${apiKey}&format=json`;

module.exports = {
    apiKey,
    apiUrl,
    apiArtistSearchMeth,
    apiTokenUrl
}