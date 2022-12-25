function gladiatorInventory(command) {
    let inventoryPeter = command.shift().split(' ');
    while (command.length !== 0) {
        let currentCommand = command.shift().split(' ');
        switch (currentCommand[0]) {
            case 'Buy':
                if (!inventoryPeter.includes(currentCommand[1])) {
                    inventoryPeter.push(currentCommand[1]);
                }
                break;
            case 'Trash':
                if (inventoryPeter.includes(currentCommand[1])) {
                    inventoryPeter.splice(inventoryPeter.indexOf(currentCommand[1]), 1)
                }
                break;
            case 'Repair':
                if (inventoryPeter.includes(currentCommand[1])) {
                    let reapairEquipment = inventoryPeter.splice(inventoryPeter.indexOf(currentCommand[1]), 1).join();
                    inventoryPeter.push(reapairEquipment);
                }
                break;
            case 'Upgrade':
                let newNameEquipment = currentCommand[1].split('-');
                if (inventoryPeter.includes(newNameEquipment[0])) {
                    let indexOfEquipment = inventoryPeter.indexOf(newNameEquipment[0]) + 1;
                    inventoryPeter.splice(indexOfEquipment,0,`${newNameEquipment[0]}:${newNameEquipment[1]}`);
                }
                break;
        }
    }
    console.log(inventoryPeter.join(' '));
}
gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);