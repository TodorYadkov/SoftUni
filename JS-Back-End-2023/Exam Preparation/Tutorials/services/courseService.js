const { Course } = require('../models/Course');
const { User } = require('../models/User');

const getAllCourseASCByDate = () => Course.find().sort({ date: 1 });


const getThreeEnrolledCourseDSC = () => Course.find({}); //.sort({ 'usersEnrolled.length': -1 }).limit(3); Not working correctly fixed with manual filtration

const createCourse = async (userInput, userId) => {
    const { title, description, imageUrl, duration } = userInput;
    return Course.create({ title, description, imageUrl, duration, owner: userId });
};

const getCourseById = (courseId) => Course.findById(courseId);

const updateCourse = (courseId, userInput) => {
    const { title, description, imageUrl, duration } = userInput;
    return Course.findByIdAndUpdate(courseId, { title, description, imageUrl, duration });
};

const deleteCourse = (courseId) => Course.findByIdAndDelete(courseId);

const signUpForCourse = async (courseId, userId) => {
    await Course.updateOne({ _id: courseId }, { $push: { usersEnrolled: userId } });
    await User.updateOne({ _id: userId }, { $push: { enrolledCourses: courseId } });
};

const getMyCourse = (userId) => User.findById(userId);

const getCourseBySearch = (string) => Course.find({ title: { $regex: new RegExp(string, 'gi') } });

module.exports = {
    getAllCourseASCByDate,
    getThreeEnrolledCourseDSC,
    createCourse,
    getCourseById,
    updateCourse,
    deleteCourse,
    signUpForCourse,
    getMyCourse,
    getCourseBySearch,
};