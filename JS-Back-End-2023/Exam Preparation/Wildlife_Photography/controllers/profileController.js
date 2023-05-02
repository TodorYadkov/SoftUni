const { userCookieName } = require('../config/environment');
const { getMyPost } = require('../services/dataService');

const profileController = require('express').Router();

profileController.get('/', async (req, res) => {
    const user = res[userCookieName];
    const allMyPost = await getMyPost(user._id).lean();
    allMyPost.myPosts.forEach(p => p.authorName = `${user.firstName} ${user.lastName}`);

    res.render('profile', {
        allMyPost: allMyPost.myPosts,
        title: 'My Posts',
    });
});

module.exports = { profileController };