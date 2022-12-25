function santaSecretHelper(inptutArr) {
    const pattern = /\@(?<name>[A-Z]+)(?:[^\@\-\!\:\>]+)\!(?<behaviour>[G|N])\!/gi;
    const nameList = [];
    const key = Number(inptutArr.shift());

    while (inptutArr[0] !== 'end') {
        let encryptedMsg = inptutArr.shift();
        let decryptedMsg = '';

        for (let char of encryptedMsg) {
            decryptedMsg += String.fromCharCode(char.charCodeAt(0) - key);
        }

        let match = pattern.exec(decryptedMsg);
        
        if (match !== null && match.groups.behaviour === 'G') {
            nameList.push(match.groups.name);
        }

        pattern.lastIndex = 0;
    }

    console.log(nameList.join('\n'));
}

santaSecretHelper(['4',                                      
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',                // Bobbie       
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',            // Sammie
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',                // Lana
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn', // Samantha
    'DReh}e=<4lhzj1%K%', 
    'end']);

santaSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);

// santaSecretHelper(['3',
//     'N}eideidmk$\'(mnyenmCNlpamnin$J$',
//     'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
//     'ppqmkkkmnolmnnCEhq/vkievk$Q$',
//     'yyegiivoguCYdohqwlqh/kguimhk$J$',
//     'end']);