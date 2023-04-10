const { Cube } = require('../models/Cube.js');

async function createCube(cube) {
    return Cube.create(cube);
}

async function getAllCubes() {
    return Cube.find().lean();
}

async function getCubeById(cubeId) {
    return Cube.findById(cubeId).populate('accessories').lean();
}

async function getCubeByIdNotPopulate(cubeId) {
    return Cube.findById(cubeId).lean();
}

async function getCubeBySearch(search = '', fromInput, toInput) {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;
    const cubes = await Cube.find({ name: { $regex: new RegExp(search, 'i') } })
        .where('difficultyLevel').lte(to).gte(from)
        .lean();
        
    return cubes;
}

module.exports = {
    createCube,
    getAllCubes,
    getCubeById,
    getCubeBySearch,
    getCubeByIdNotPopulate,
};