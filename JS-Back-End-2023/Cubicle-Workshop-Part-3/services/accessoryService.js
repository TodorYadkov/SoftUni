const { Accessory } = require('../models/Accessory.js');
const { Cube } = require('../models/Cube.js');
const { getCubeById } = require('./cubeServices.js');

async function createAccessory(accessoryData) {
    return Accessory.create(accessoryData);
}
// When I create the function like this, lean() works called on the returned result, 
// and when it's a regular function lean() works only inside the function
const getOnlyUnused = (ids) => Accessory.find({ _id: { $nin: ids } });

async function getAllAccessories() {
    return Accessory.find().lean();
}

async function attachCube(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    const accessories = await Accessory.findById(accessoryId);

    cube.accessories.push(accessoryId);
    accessories.cubes.push(cubeId);

    await cube.save();
    await accessories.save();

    return cube;
}

module.exports = {
    createAccessory,
    getAllAccessories,
    attachCube,
    getOnlyUnused,
};