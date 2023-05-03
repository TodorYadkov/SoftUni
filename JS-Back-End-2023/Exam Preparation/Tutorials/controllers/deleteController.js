const deleteController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getCourseById, deleteCourse } = require('../services/courseService.js');
const { errorHandler } = require('../util/errorHandler.js');

deleteController.get('/:id', async (req, res) => {
    const courseId = req.params.id;
    try {
        const course = await getCourseById(courseId).lean();
        if (course.owner != res[userCookieName]._id) {
            throw new Error(`${res[userCookieName].username} is not the owner of the current offer`);
        }

        await deleteCourse(courseId);
        res.redirect('/');
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${courseId}`);
    }
});

module.exports = { deleteController };