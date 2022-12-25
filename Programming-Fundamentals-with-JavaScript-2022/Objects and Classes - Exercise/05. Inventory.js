function inventory(array) {
    class Hero {
        constructor(name,level,items) {
            this.Hero = name;
            this.level = level;
            this.items = items;
        }
    }

    let listHeroes = [];

    for (let i = 0; i < array.length; i++) {
        let heroName = array[i].split(' / ').shift();
        let heroLevel = Number(array[i].split(' / ')[1]);
        let heroItems = array[i].split(' / ')[2].split(',').join(',');
        
        listHeroes.push(new Hero(heroName,heroLevel,heroItems));
    }
    listHeroes.sort((a,b) => a.level - b.level)
              .forEach((el) => console.log(`Hero: ${el.Hero}\nlevel => ${el.level}\nitems => ${el.items}`));
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

inventory(['Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara']);