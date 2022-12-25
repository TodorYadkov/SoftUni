function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };

    return classToExtend;
}

class Species{
    constructor() {
        
    }
}

console.log(Species.prototype);
const NewSpecies = extendProrotype(Species);
console.log(NewSpecies.prototype);
console.log(NewSpecies.prototype.toSpeciesString());
const dogSpecies = NewSpecies;
dogSpecies.prototype.species = 'Dog';
console.log(dogSpecies.prototype.toSpeciesString());