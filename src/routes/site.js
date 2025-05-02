// FILEPATH: d:/F8/NodeJsLearn/blog/src/routes/news.js

const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.get('/search', SiteController.search);
router.get('/', SiteController.index);

module.exports = router;
