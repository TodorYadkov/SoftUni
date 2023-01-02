class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const currentUniquePlayers = new Set();
        while (footballPlayers.length > 0) {
            let [name, age, playerValue] = footballPlayers.shift().split('/');
            playerValue = Number(playerValue);

            const wantedPlayer = this.invitedPlayers.find(p => p.name === name);
            if (wantedPlayer === undefined) {
                this.invitedPlayers.push({ name, age, playerValue });
            } else if (wantedPlayer.playerValue < playerValue) {
                wantedPlayer.playerValue = playerValue;
            }

            currentUniquePlayers.add(name);
        }
        
        return `You successfully invite ${Array.from(currentUniquePlayers).join(', ')}.`;
    }

    signContract(selectedPlayer) {
        const delimiterIndex = selectedPlayer.indexOf('/');
        const playerName = selectedPlayer.substring(0, delimiterIndex);
        const playerOffer = Number(selectedPlayer.substring(delimiterIndex + 1));

        const wantedPlayer = this.invitedPlayers.find(p => p.name === playerName);
        if (wantedPlayer === undefined) {
            throw new Error(`${playerName} is not invited to the selection list!`);
        } else if (playerOffer < wantedPlayer.playerValue) {
            const priceDifference = wantedPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${priceDifference} million more are needed to sign the contract!`);
        }

        wantedPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const wantedPlayer = this.invitedPlayers.find(p => p.name === name);
        if (wantedPlayer === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (wantedPlayer.age >= age) {
            return `${name} is above age limit!`;
        } else {
            const ageDifference = age - wantedPlayer.age;
            if (ageDifference > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }
        }
    }

    transferWindowResult() {
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        const players = [];
        this.invitedPlayers.forEach(p => players.push(`Player ${p.name}-${p.playerValue}`));
        return [
            'Players list:',
            players.join('\n')
        ].join('\n');
    }
}

// let fTeam = new footballTeam('Barcelona', 'Spain');
// console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52', 'Kylian Mbappé/23/160'])); // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

// let fTeam = new footballTeam('Barcelona', 'Spain');
// console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52'])); // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// console.log(fTeam.signContract('Lionel Messi/60')); // Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// console.log(fTeam.signContract('Kylian Mbappé/240')); // Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
// console.log(fTeam.signContract('Barbukov/10')); // Uncaught Error: Barbukov is not invited to the selection list!

// let fTeam = new footballTeam('Barcelona', 'Spain');
// console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52'])); // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// console.log(fTeam.ageLimit('Lionel Messi', 33)); // Lionel Messi is above age limit!
// console.log(fTeam.ageLimit('Kylian Mbappé', 30)); // Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// console.log(fTeam.ageLimit('Pau Torres', 26)); // Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// console.log(fTeam.signContract('Kylian Mbappé/240')); // Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

let fTeam = new footballTeam('Barcelona', 'Spain');
console.log(fTeam.newAdditions(['Kylian Mbappé/23/160', 'Lionel Messi/35/50', 'Pau Torres/25/52'])); // You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
console.log(fTeam.signContract('Kylian Mbappé/240')); // Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.
console.log(fTeam.ageLimit('Kylian Mbappé', 30)); // Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
console.log(fTeam.transferWindowResult()); // Players list:
                                           // Player Kylian Mbappé-Bought
                                           // Player Lionel Messi-50
                                           // Player Pau Torres-52











