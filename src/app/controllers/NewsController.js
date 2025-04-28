// FILEPATH: d:/F8/NodeJsLearn/blog/src/controllers/NewsController.js

class NewsController {
    static index(req, res) {
        res.render('news');
    }
    // [GET] /news/:slug
    static show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = NewsController;
