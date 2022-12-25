function movie(array) {
    let allMovies = [];

    for (let el of array) {
        let currentCommand = el.split(' ');

        if (currentCommand.includes('addMovie')) {
            let index = currentCommand.indexOf('addMovie');
            currentCommand.splice(index, 1);
            currentCommand = currentCommand.join(' ');
            allMovies.push({ name: currentCommand });

        } else if (currentCommand.includes('directedBy')) {
            let [movie, director] = currentCommand.join(' ').split(' directedBy ');
            let check = allMovies.find((el) => el.name === movie);
            if (check) {
                check.director = director;
            }
        } else if (currentCommand.includes('onDate')) {
            let [movie, date] = currentCommand.join(' ').split(' onDate ');
            let check = allMovies.find((el) => el.name === movie);
            if (check) {
                check.date = date;
            }
        }
    }
    allMovies.filter((el => ((el.director !== undefined) && (el.date !== undefined)))).forEach(prop => console.log(JSON.stringify(prop)));
}

movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
movie([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);
