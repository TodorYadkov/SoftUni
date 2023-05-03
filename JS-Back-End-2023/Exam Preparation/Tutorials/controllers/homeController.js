const { userCookieName } = require('../config/environment');
const { getAllCourseASCByDate, getThreeEnrolledCourseDSC, getCourseBySearch } = require('../services/courseService');
const { errorHandler } = require('../util/errorHandler');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const courses = {};
        const user = res[userCookieName];
        if (user) {
            const searchStr = req.query.q;
            if (searchStr) {
                courses.allCourseUser = await getCourseBySearch(searchStr).lean();
                courses.userSearch = searchStr;
            } else {
                courses.allCourseUser = await getAllCourseASCByDate().lean();
            }

            courses.isLogged = true;
            courses.allCourseUser.forEach(u => u.date = u.date.toLocaleString());
        } else {
            courses.allCourseGuest = await getThreeEnrolledCourseDSC().lean();
            courses.allCourseGuest = courses.allCourseGuest.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length).splice(0, 3);
            courses.allCourseGuest.forEach(u => u.enrolledCount = u.usersEnrolled.length);
        }

        res.render('home', {
            courses,
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('/');
    }
});

homeController.post('/', async (req, res) => {
    const query = [];
    const search = req.body;
    if (search.userSearch) {
        query.push(`?q=${search.userSearch}`);
    }

    res.redirect(`/${query.join('&')}`);
});

module.exports = { homeController };