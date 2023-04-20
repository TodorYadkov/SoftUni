const { Game } = require('../models/Game.js');

const getAllGames = () => Game.find();

const getGameById = (gameId) => Game.findById(gameId);

const updateGame = (gameId, data) => Game.findByIdAndUpdate(gameId, data, { runValidators: true });

const deleteGame = (gameId) => Game.findByIdAndDelete(gameId);

async function getGameBySearch(search, searchPlatform) {
    const foundGames = await Game.find({
        name: { $regex: new RegExp(search, 'i') },
        platform: { $regex: new RegExp(searchPlatform, 'i') },
    }).lean();

    return foundGames;
}

async function buyGame(gameId, userId) {
    const game = await Game.findById(gameId);
    if (game.boughtBy.includes(userId)) {
        throw new Error('Product is alredy bought!');
    }

    game.boughtBy.push(userId);
    await game.save();
}

async function createGame(userId, data) {
    const { platform, name, imageUrl, price, genre, description } = data;
    const newGame = await Game.create({ platform, name, imageUrl, price, genre, description, owner: userId });
    return newGame;
};

async function hasBought(userId, gameId) {
    const game = await Game.findById(gameId);
    return game.boughtBy.includes(userId);
};

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame,
    getGameBySearch,
    hasBought,
    buyGame,
};