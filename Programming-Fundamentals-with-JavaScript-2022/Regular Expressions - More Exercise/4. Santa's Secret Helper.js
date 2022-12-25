function santaSecret(input) {
    // copy a parameter to a new array
    let workArray = input.slice();
    // get the decryption key
    const decryptedKey = Number(workArray.shift());
    // make a pattern to get the name and behavior of the children
    const pattern = /@(?<name>[A-Za-z]+)(?:[^\@\-\!\:\>]+)\!(?<behavior>G|N)+\!/g;
    while (workArray[0] !== 'end') {
        // get the current encrypted message
        let currentMessage = workArray.shift();
        let decryptedMessage = '';
        // decrypt the message
        for (let char of currentMessage) {
            decryptedMessage += String.fromCharCode(char.charCodeAt() - decryptedKey);
        }
        // get the name and according to the behavior print the final result
        let matchDecryptedMessage = pattern.exec(decryptedMessage);
        if (matchDecryptedMessage !== null) {
            if (matchDecryptedMessage.groups.behavior === 'G') {
                console.log(matchDecryptedMessage.groups.name);
            }
            matchDecryptedMessage = pattern.exec(decryptedMessage);
        }
    }
}

santaSecret(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);
santaSecret(['3',
    'N}eideidmk$\'(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);
santaSecret(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end']);