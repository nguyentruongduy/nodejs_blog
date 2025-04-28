// FILEPATH: d:/F8/NodeJsLearn/blog/src/routes/news.js

const express = require('express');
const router = express.Router();
const SiteController = require('../app/controllers/SiteController');

router.use('/search', SiteController.search);
router.use('/', SiteController.index);

module.exports = router;
