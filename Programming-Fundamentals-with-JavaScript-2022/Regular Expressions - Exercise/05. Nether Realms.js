function netherRealms(str) {
    // conversion of string to array and sоrt
    let splitPattern = / *?, */g;
    let names = str.split(splitPattern).sort();
    // get each name and extract the needed information
    for (let i = 0; i < names.length; i++) {
        let name = names[i].trim();
        let healthPoint = 0;
        let damagePoint = 0;
        // get each ascii code of the character and add to health
        let health = name.match(/[^\d\+\-*\/\.]/g);
        if (health !== null) {
            health.forEach(el => healthPoint += el.charCodeAt());
        }
        // get each number of the name and add in the damage
        let damage = name.match(/(?:\+|-)?[0-9]+(?:\.[0-9]+)?/g);
        if (damage !== null) {
            damage.forEach(el => {
                let newNum = el;
                if (el.includes('-')) {
                    let index = el.indexOf('-') + 1;
                    newNum = el.substring(index);
                    damagePoint -= Number(newNum);
                } else if (el.includes('+') || isNaN(Number(el)) === false) {
                    let index = el.indexOf('+') + 1;
                    newNum = el.substring(index);
                    damagePoint += Number(newNum);
                }
            });
        }
        // multiply or divide according to the order of characters in the name by the number 2
        let matchSign = name.match(/[\*\/]/g);
        if (matchSign !== null) {
            matchSign.forEach(el => {
                if (el.includes('*')) {
                    damagePoint *= 2;
                } else if (el.includes('/')) {
                    damagePoint /= 2;
                }
            });
        }
        if (name !== '') {
            console.log(`${name} - ${healthPoint} health, ${damagePoint.toFixed(2)} damage`);
        }
    }
}
// netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
// netherRealms('Gos/ho');