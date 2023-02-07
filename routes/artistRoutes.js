const express = require('express');
const router = express.Router();

const artistControllers = require('../controllers/artistController');

router.get('/artist.search/', artistControllers.getArtistByName);

module.exports = router;
