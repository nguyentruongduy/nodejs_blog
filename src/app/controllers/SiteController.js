const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    static  index(req, res, next) {
       Course.find({})
       .then(courses => {
           res.render('home', {
               course: multipleMongooseToObject(courses)
           });
       })
       .catch(next);
    }

    // [GET] /search
    static search(req, res) {
        res.render('search');
    }
}

module.exports = SiteController;