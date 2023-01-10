class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (this.priceForTheCamp.hasOwnProperty(condition) === false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        const checkName = this.listOfParticipants.find(n => n.name === name);
        if (checkName !== undefined) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const checkName = this.listOfParticipants.find(n => n.name === name);
        if (checkName === undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(this.listOfParticipants.findIndex(obj => obj === checkName), 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const player1 = this.listOfParticipants.find(n => n.name === participant1);
        const player2 = typeOfGame === 'WaterBalloonFights' ? this.listOfParticipants.find(n => n.name === participant2) : null;

        if (player1 === undefined || player2 === undefined) {
            throw new Error('Invalid entered name/s.');
        }

        if (player2 !== null && player1.condition !== player2.condition) {
            throw new Error('Choose players with equal condition.');
        }

        if (typeOfGame === 'WaterBalloonFights') {
            if (player1.power > player2.power) {
                player1.wins++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`;
            }

            if (player2.power > player1.power) {
                player2.wins++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`;
            }

        } else if (typeOfGame === 'Battleship') {
            player1.power += 20;
            return `The ${player1.name} successfully completed the game ${typeOfGame}.`;
        }

        return 'There is no winner.';
    }

    toString() {
        const printArr = [];
        this.listOfParticipants
            .sort((a, b) => b.wins - a.wins)
            .forEach(p => printArr.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));

        return [
            `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`,
            printArr.join('\n')
        ].join('\n');
    }
}

const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 200));  // The money is not enough to pay the stay at the camp.
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));  // The Petar Petarson was successfully registered.
console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));  // The Petar Petarson is already registered at the camp.
console.log(summerCamp.registerParticipant('Leila Wolfe', 'childd', 200));      // Uncaught Error: Unsuccessful registration at the camp.

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));  // The Petar Petarson was successfully registered.
// console.log(summerCamp.unregisterParticipant('Petar Petarson'));                // The Petar Petarson removed successfully.
// console.log(summerCamp.unregisterParticipant('Petar'));                         // Uncaught Error: The Petar is not registered in the camp.

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));                  // The Petar Petarson was successfully registered.
// console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));                             // The Petar Petarson successfully completed the game Battleship.
// console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));                    // The Sara Dickinson was successfully registered.
// console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));                  // The Dimitur Kostov was successfully registered.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));   // The Petar Petarson is winner in the game WaterBalloonFights.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Sara Dickinson'));   // Uncaught Error: Choose players with equal condition.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson'));                     // Uncaught Error: Invalid entered name/s.

// const summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
// console.log(summerCamp.registerParticipant('Petar Petarson', 'student', 300));                  // The Petar Petarson was successfully registered.
// console.log(summerCamp.timeToPlay('Battleship', 'Petar Petarson'));                             // The Petar Petarson successfully completed the game Battleship.
// console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));                    // The Sara Dickinson was successfully registered.
// console.log(summerCamp.registerParticipant('Dimitur Kostov', 'student', 300));                  // The Dimitur Kostov was successfully registered.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));   // The Petar Petarson is winner in the game WaterBalloonFights.
// console.log(summerCamp.timeToPlay('Battleship', 'Dimitur Kostov'));                             // The Dimitur Kostov successfully completed the game Battleship.
// console.log(summerCamp.timeToPlay('Battleship', 'Dimitur Kostov'));                             // The Dimitur Kostov successfully completed the game Battleship.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));   // The Dimitur Kostov is winner in the game WaterBalloonFights.
// console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Petar Petarson', 'Dimitur Kostov'));   // The Dimitur Kostov is winner in the game WaterBalloonFights.
// console.log(summerCamp.toString());                                                             // Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
//                                                                                                 // Dimitur Kostov - student - 140 - 2
//                                                                                                 // Petar Petarson - student - 120 - 1
//                                                                                                 // Sara Dickinson - child - 100 - 0