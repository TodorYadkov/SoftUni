function winningTicket(ticket) {
    // pattern to get the required winning symbols
    const regexp = /@{6,10}|#{6,10}|\${6,10}|\^{6,10}/g;
    // string to array
    let arr = ticket.split(',');
    // loop through each element of the array
    for (let el of arr) {
        // remove free space
        let currentTicket = el.trim();
        let result = 'invalid ticket';
        // check the required length of the winning ticket
        if (currentTicket.length === 20) {
            // get the left half of the ticket
            let leftHalf = currentTicket.substring(0, currentTicket.length / 2);
            // get the right half of the ticket
            let rightHalf = currentTicket.substring(currentTicket.length / 2);
            // check that there are six items continuously
            let matchLeftHalf = leftHalf.match(regexp);
            let matchRighttHalf = rightHalf.match(regexp);
            // transform into the array of one character
            if (matchLeftHalf !== null && matchRighttHalf !== null) {
                matchLeftHalf = matchLeftHalf.join('').split('');
                matchRighttHalf = matchRighttHalf.join('').split('');
            }
            // check the requirement of a winning ticket
            if ((matchLeftHalf === null || matchRighttHalf === null) || (matchLeftHalf.length < 6) || (matchRighttHalf.length < 6)) {
                result = `ticket "${currentTicket}" - no match`;
            } else if ((matchLeftHalf.length >= 6 && matchLeftHalf.length <= 9) ||
                (matchRighttHalf.length >= 6 && matchRighttHalf.length <= 9)) {
                result = `ticket "${currentTicket}" - ${Math.min(matchLeftHalf.length, matchRighttHalf.length)}${matchLeftHalf[0]}`;
            } else if ((matchLeftHalf.length == 10) && (matchRighttHalf.length == 10)) {
                result = `ticket "${currentTicket}" - ${matchLeftHalf.length}${matchLeftHalf[0]} Jackpot!`;
            }
        }
        // print final result
        console.log(result);
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey,lkkkkkkkkkkkkkkkkkkk,^^^^^^Ca^^^^^^shCash');
winningTicket('validticketnomatch:(');
winningTicket('^^^^^^Ca^^^^^^shCash');
winningTicket('##vv##vv##vv####cc##');
winningTicket('th@@@@@@@emo@@@@@@ey,@@th@@@@@@emo@@@@@@e');
winningTicket('@@@@@@@@@@@@@@@@@@ku');