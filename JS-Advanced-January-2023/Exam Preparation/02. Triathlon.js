class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`;
    }

    completeness(participantName, condition) {
        if (this.participants.hasOwnProperty(participantName) === false) {
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }

        const completedCount = Math.trunc(condition / 30);
        if (completedCount === 1 || completedCount === 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`;
        }

        this.listOfFinalists.push({ participantName, participantGender: this.participants[participantName] });
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {
        const wantedparticipant = this.listOfFinalists.find(p => p.participantName === participantName);
        if (wantedparticipant === undefined) {
            return `${participantName} is not in the current finalists list`;
        }

        return `${participantName} was rewarded with a trophy for his performance`;
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return 'There are no finalists in this competition';
        }

        if (criteria !== 'all') {
            const wantedCriteria = this.listOfFinalists.find(p => p.participantGender === criteria);
            return `${wantedCriteria.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else {
            const participantName = [];
            this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName)).forEach(name => participantName.push(name.participantName));
            return [
                `List of all ${this.competitionName} finalists:`,
                participantName.join('\n'),
            ].join('\n');
        }
    }
}

const contest = new Triathlon('Dynamos');
console.log(contest.addParticipant('Peter', 'male'));   // A new participant has been added - Peter
console.log(contest.addParticipant('Sasha', 'female')); // A new participant has been added - Sasha
console.log(contest.addParticipant('Peter', 'male'));   // Peter has already been added to the list

// const contest = new Triathlon('Dynamos');
// console.log(contest.addParticipant('Peter', 'male'));   // A new participant has been added - Peter
// console.log(contest.addParticipant('Sasha', 'female')); // A new participant has been added - Sasha
// console.log(contest.addParticipant('George', 'male'));  // A new participant has been added - George
// console.log(contest.completeness('Peter', 100));        // Congratulations, Peter finished the whole competition
// console.log(contest.completeness('Sasha', 70));         // Sasha could only complete 2 of the disciplines
// console.log(contest.completeness('George', 20));        // Uncaught Error: George is not well prepared and cannot finish any discipline

// const contest = new Triathlon('Dynamos');
// console.log(contest.addParticipant('Peter', 'male'));   // A new participant has been added - Peter
// console.log(contest.addParticipant('Sasha', 'female')); // A new participant has been added - Sasha
// console.log(contest.completeness('Peter', 100));        // Congratulations, Peter finished the whole competition
// console.log(contest.completeness('Sasha', 70));         // Sasha could only complete 2 of the disciplines
// console.log(contest.rewarding('Peter'));                // Peter was rewarded with a trophy for his performance
// console.log(contest.rewarding('Sasha'));                // Sasha is not in the current finalists list

// const contest = new Triathlon('Dynamos');
// console.log(contest.showRecord('all'));     // There are no finalists in this competition

// const contest = new Triathlon('Dynamos');
// console.log(contest.addParticipant('Peter', 'male'));   // A new participant has been added - Peter
// console.log(contest.addParticipant('Sasha', 'female')); // A new participant has been added - Sasha
// console.log(contest.completeness('Peter', 100));        // Congratulations, Peter finished the whole competition
// console.log(contest.completeness('Sasha', 90));         // Congratulations, Sasha finished the whole competition
// console.log(contest.rewarding('Peter'));                // Peter was rewarded with a trophy for his performance
// console.log(contest.rewarding('Sasha'));                // Sasha was rewarded with a trophy for his performance
// console.log(contest.showRecord('all'));                 // List of all Dynamos finalists:
//                                                         // Peter
//                                                         // Sasha

// const contest = new Triathlon('Dynamos');
// console.log(contest.addParticipant('Peter', 'male'));       // A new participant has been added - Peter
// console.log(contest.addParticipant('Sasha', 'female'));     // A new participant has been added - Sasha
// console.log(contest.addParticipant('George', 'male'));      // A new participant has been added - George
// console.log(contest.completeness('Peter', 100));            // Congratulations, Peter finished the whole competition
// console.log(contest.completeness('Sasha', 90));             // Congratulations, Sasha finished the whole competition
// console.log(contest.completeness('George', 95));            // Congratulations, George finished the whole competition
// console.log(contest.rewarding('Peter'));                    // Peter was rewarded with a trophy for his performance
// console.log(contest.rewarding('Sasha'));                    // Sasha was rewarded with a trophy for his performance
// console.log(contest.rewarding('George'));                   // George was rewarded with a trophy for his performance
// console.log(contest.showRecord('male'));                    // Peter is the first male that finished the Dynamos triathlon