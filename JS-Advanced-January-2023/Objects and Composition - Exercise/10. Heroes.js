function result() {
    const canCast = (state) => ({
        cast: (spell) => {
            console.log(`${state.name} cast ${spell}`);
            state.mana--;
        }
    });

    const canFight = (state) => ({
        fight: () => {
            console.log(`${state.name} slashes at the foel!`);
            state.stamina--;
        }
    });

    const fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
        };

        return Object.assign(state, canFight(state));
    };

    const mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
        };

        return Object.assign(state, canCast(state));
    };

    return { mage: mage, fighter: fighter };
}

// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);



let create = result();

const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

let act4 = scorcher.mana;
let exp4 = 97;
assert.equal(act4,exp4,"4");
let act1 = scorcher.health;
assert.equal(100,act1);
