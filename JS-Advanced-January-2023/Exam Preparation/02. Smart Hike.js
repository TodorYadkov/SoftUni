class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (this.goals.hasOwnProperty(peak) === false) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources === 0) {
            throw new Error('You don\'t have enough resources to start the hike');
        }

        if (this.resources - (Number(time) * 10) < 0) {
            return 'You don\'t have enough resources to complete the hike';
        }

        this.resources -= (Number(time) * 10);
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        const addResources = time * 10;
        if (this.resources + addResources >= 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        }

        this.resources += addResources;
        return `You have rested for ${time} hours and gained ${addResources}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'all') {
            const printLine = [];
            this.listOfHikes.forEach(el => printLine.push(`${this.username} hiked ${el.peak} for ${el.time} hours`));
            return [
                'All hiking records:',
                printLine.join('\n'),
            ].join('\n');
        }

        const searchedHikePerCriteria = this.listOfHikes.filter(c => c.difficultyLevel === criteria);
        if (searchedHikePerCriteria.length !== 0) {
            const bestPeak = searchedHikePerCriteria.sort((a, b) => a.time - b.time)[0];
            return `${this.username}'s best ${criteria} hike is ${bestPeak.peak} peak, for ${bestPeak.time} hours`;
        } else {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
    }
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));  // You have successfully added a new goal - Musala
console.log(user.addGoal('Rui', 1706));     // You have successfully added a new goal - Rui
console.log(user.addGoal('Musala', 2925));  // Musala has already been added to your goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));      // You have successfully added a new goal - Musala
// console.log(user.addGoal('Rui', 1706));         // You have successfully added a new goal - Rui
// console.log(user.hike('Musala', 8, 'hard'));    // You hiked Musala peak for 8 hours and you have 20% resources left
// console.log(user.hike('Rui', 3, 'easy'));       // You don't have enough resources to complete the hike
// console.log(user.hike('Everest', 12, 'hard'));  // Uncaught Error: Everest is not in your current goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));      // You have successfully added a new goal - Musala
// console.log(user.hike('Musala', 8, 'hard'));    // You hiked Musala peak for 8 hours and you have 20% resources left
// console.log(user.rest(4));                      // You have rested for 4 hours and gained 40% resources
// console.log(user.rest(5));                      // Your resources are fully recharged. Time for hiking!

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));        // Vili has not done any hiking yet

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));   // Vili has not done any easy hiking yet
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));   // Vili's best hard hike is Musala peak, for 8 hours
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));    // All hiking records:
//                                         // Vili hiked Musala for 8 hours