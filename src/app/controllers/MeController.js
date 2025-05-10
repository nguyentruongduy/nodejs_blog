const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    static storedCourses(req, res,next) {

        Promise.all([Course.find({}), Course.findDeleted({})])
        .then(([courses, deletedCount]) =>
            res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses),
                deletedCount: deletedCount.filter(course => course.deleted).length
            }),
        )
        .catch(next);

        Course.countDocumentsDeleted()
           .then((deletedCount) => {
              console.log(deletedCount);
           })
           .catch(next);


        Course.find()
            .then(courses => res.render('me/stored-courses',{
                courses: multipleMongooseToObject(courses)}))
           .catch(next)
    }

    // [GET] /me/trash/courses
    static trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                // Lọc lại chỉ lấy các bản ghi có deleted: true
                const onlyDeleted = courses.filter(course => course.deleted === true);
                res.render('me/trash-courses', {
                    courses: multipleMongooseToObject(onlyDeleted)
                });
            })
            .catch(next);
    }
    
   
}

module.exports = MeController;