const profileController = require('express').Router();
const { userCookieName } = require('../config/environment');
const { getMyCourse } = require('../services/courseService');
const { errorHandler } = require('../util/errorHandler');

profileController.get('/', async (req, res) => {
    try {
        const myCourses = await getMyCourse(res[userCookieName]._id).populate('enrolledCourses').lean();
        res.render('profile', {
            myCourses: myCourses.enrolledCourses
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

module.exports = { profileController };