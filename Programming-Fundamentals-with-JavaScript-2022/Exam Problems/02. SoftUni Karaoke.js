function softUniKaraoke(input) {
    // make a list of singers - array
    // make a list of songs - array
    // when singing the song save song and award number in an object
    // until the 'dawn' command get the participant, song and award
    // - Print participants sorted by unique awards count in descending order. 
    //   If two participants have the same unique award count, sort them alphabetically by name
    //   Print unique awards for every participant sorted alphabetically
    //   If there are no awards, print "No awards"

    const singersList = input.shift().split(',').map(singer => singer.trim());
    const songsList = input.shift().split(',').map(song => song.trim());
    const awardSingers = {};

    while (input[0] !== 'dawn') {
        let [participant, song, award] = input.shift().split(',').map(song => song.trim());

        if (singersList.includes(participant) && songsList.includes(song)) {
            if (awardSingers.hasOwnProperty(participant)) {
                if (awardSingers[participant].song.includes(song) === false) {
                    awardSingers[participant].song.push(song);
                }

                if (awardSingers[participant].award.includes(award) === false) {
                    awardSingers[participant].award.push(award);
                }
            } else {
                awardSingers[participant] = {
                    song: [song],
                    award: [award],
                };
            }
        }
    }

    let sortedSingersObjAward = {};
    for (let prop in awardSingers) {
        awardSingers[prop].award.sort((a, b) => a.localeCompare(b));

        for (let nestProp in awardSingers[prop]) {
            if (nestProp === 'award') {
                sortedSingersObjAward[prop] = awardSingers[prop].award.length;
            }
        }
    }

    let sortDSCAwardASCName = Object.entries(sortedSingersObjAward).sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );

    if (sortDSCAwardASCName.length > 0) {
        for (let el of sortDSCAwardASCName) {
            console.log(`${el[0]}: ${el[1]} awards`);
            awardSingers[el[0]].award.forEach(award => console.log(`--${award}`));
        }
    } else {
        console.log('No awards')
    }
}

softUniKaraoke(['Trifon, Vankata, Gesha',
    'Dragana - Kukavice, Bon Jovi - It\'s my life, Lorde - Royals',
    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn']);

softUniKaraoke(['Gesha',
    'Bon Jovi - It\'s my life',
    'Gesha, Bon Jovi - It\'s my life, Best Rock',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn']);
softUniKaraoke(['Sino',
    'Vasko Naidenov - Nova Godina',
    'dawn']);
softUniKaraoke(['Sino', 'Vasko Naidenov - Nova Godina', 'dawn']);
