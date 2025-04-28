class SiteController {
    static index(req, res) {
        res.render('home');
    }
    // [GET] /search
    static search(req, res) {
        res.render('search');
    }
}

module.exports = SiteController;
