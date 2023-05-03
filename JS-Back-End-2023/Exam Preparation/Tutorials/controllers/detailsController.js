const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment');
const { isLogged } = require('../middleware/guards');
const { getCourseById, signUpForCourse } = require('../services/courseService');
const { errorHandler } = require('../util/errorHandler');

detailsController.get('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        const courseDetails = await getCourseById(courseId).lean();
        courseDetails.isOwner = courseDetails.owner == userId;
        courseDetails.hasEnrolled = courseDetails.usersEnrolled.some(u => u._id == userId);

        res.render('details', {
            courseDetails,
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

detailsController.get('/:id/enroll', isLogged, async (req, res) => {
    const courseId = req.params.id;
    try {
        const userId = res[userCookieName]._id;
        await signUpForCourse(courseId, userId);
        res.redirect(`/details/${courseId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${courseId}`);
    }
});

module.exports = { detailsController };