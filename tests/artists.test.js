const artistRouter = require('../routes/artistRoutes');

const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/artists', artistRouter);

const testingArtistsNames = [
  'garcia',
  'kjgbafkjahfo',
];

describe('GET /artists/', () => {
  it('Check if a \'normal\' name works', async () => {
    const response = await request(app).get(`/artists/artist.search/?name=${testingArtistsNames[0]}`);

    expect(response.res.rawHeaders).toEqual(expect.arrayContaining([`attachment; filename=\"${testingArtistsNames[0]}.csv\"`]));
    expect(response.status).toEqual(200);
  });

  it('A name that doesn\'t exists returns artists searched by random name', async () => {
    const response = await request(app).get(`/artists/artist.search/?name=${testingArtistsNames[1]}`);

    expect(response.res.rawHeaders).not.toEqual(expect.arrayContaining([`attachment; filename=\"${testingArtistsNames[1]}.csv\"`]));
    expect(response.status).toEqual(200);
  });
});
