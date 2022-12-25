function tseamAccount(arr) {
    let accountPeter = arr.shift().split(' ');
    let index = 0;
    let command = arr[index++].split(' ');
    while (command[0] !== 'Play!') {
        let tempCommand = command[0];
        let tempGame = command[1];
        switch (tempCommand) {
            case 'Install':
                for (let i = 0; i < accountPeter.length; i++) {
                    let exist = accountPeter.includes(tempGame);
                    if (!exist) {
                        accountPeter.push(tempGame);
                    }
                }
                    break;
            case 'Uninstall':
                for (let i = 0; i < accountPeter.length; i++) {
                    if (tempGame === accountPeter[i]) {
                        accountPeter.splice(i, 1);
                        break;
                    }
                }
                break;
            case 'Update':
                for (let i = 0; i < accountPeter.length; i++) {
                    if (tempGame === accountPeter[i]) {
                        accountPeter.splice(i, 1);
                        accountPeter.push(tempGame);
                        break;
                    }
                }
                break;
            case 'Expansion':
                tempGame = tempGame.split('-');
                for (let i = 0; i < accountPeter.length; i++) {
                    if (tempGame[0] === accountPeter[i]) {
                        accountPeter.splice(i + 1, 0, `${tempGame[0]}:${tempGame[1]}`);
                        break;
                    }
                }
                break;
        }
        command = arr[index].split(' ');
        index++;
    }
    console.log(accountPeter.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);