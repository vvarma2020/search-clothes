const express = require('express');
const router = express.Router();
const searchQueryController = require('../../controllers/searchQueryController');

router.route('/')
    .get(searchQueryController.searchQuery);

module.exports = router;