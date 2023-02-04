const express = require("express");
const router = express.Router();

const artistControllers = require("../controllers/artistController");

router.get("/artist.search/:name", artistControllers.getArtistByName);

module.exports = router;
