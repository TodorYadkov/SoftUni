const fs = require('fs').promises;
const path = require('path');
const cubes = require('../db.json');

async function createCube(cube) {
    try {
        for (const field in cube) {
            if (cube[field] === '') {
                throw new Error('All fields are required!');
            }
        }

        const { name, description, imageUrl, difficultyLevel } = cube;
        const randomNumber = Math.ceil(Math.random() * 10000);
        const newCube = Object.assign({ id: cubes[cubes.length - 1].id + 1 + randomNumber }, cube);
        cubes.push(newCube);
        await fs.writeFile(path.resolve('db.json'), JSON.stringify(cubes, null, 2));

    } catch (error) {
        throw error;
    }
}

function getAllCubes() {
    return cubes;
}

function getCubeById(cubeId) {
    return cubes.find(c => c.id == Number(cubeId));
}

function getCubeBySearch(search, from, to) {
    const maxDifficultyLevel = Math.max(...cubes.map(c => Number(c.difficultyLevel)));
    return cubes
        .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .filter(c => c.difficultyLevel >= (Number(from) || 0) && c.difficultyLevel <= (Number(to) || maxDifficultyLevel));
}

module.exports = {
    createCube,
    getAllCubes,
    getCubeById,
    getCubeBySearch,
};