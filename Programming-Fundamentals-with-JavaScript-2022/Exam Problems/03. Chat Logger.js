function chatLogger(arrInput) {
    let chatHistory = [];
    
    for (let el of arrInput) {
        if (el === 'End') {
            break;
        }

        let info = el.split(' ');
        let command = info.shift();
        switch (command) {
            case 'Chat':
                chatHistory = chat(info);
                break;
            case 'Delete':
                chatHistory = deleteFunction(info);
                break;
            case 'Edit':
                chatHistory = edit(info);
                break;
            case 'Pin':
                chatHistory = pin(info);
                break;
            case 'Spam':
                chatHistory = spam(info);
                break;
        }
    }

    

    console.log(chatHistory.join('\n'));

    //function part
    function chat(info) {
        let message = info.join('');
        chatHistory.push(message);
        return chatHistory;
    }

    function deleteFunction(info) {
        let message = info[0];
        let tempIndex = 0;
        if (chatHistory.includes(message)) {
            tempIndex = chatHistory.indexOf(message);
            chatHistory.splice(tempIndex,1);
        }

        return chatHistory;
    }

    function edit(message) {
        let oldMessage = message[0];
        let newMessage = message[1];
        let tempIndex = 0;
        if (chatHistory.includes(oldMessage)) {
            tempIndex = chatHistory.indexOf(oldMessage);
            chatHistory.splice(tempIndex,1,newMessage);
        }

        return chatHistory;
    }

    function pin(info) {
        let message = info[0];
        let tempIndex = 0;
        if (chatHistory.includes(message)) {
            tempIndex = chatHistory.indexOf(message);
            let tempMessage = chatHistory.splice(tempIndex,1).join('');
            chatHistory.push(tempMessage);
        }

        return chatHistory;
    }

    function spam(message) {
        for (let el of message) {
            chatHistory.push(el);
        }
 
        return chatHistory;
    }
}

// chatLogger(['Chat Hello',
//     'Chat darling',
//     'Edit darling Darling',
//     'Spam how are you',
//     'Delete Darling',
//     'End']);
// chatLogger(['Chat Hello',
//     'Delete John',
//     'Pin Hi',
//     'End']);
chatLogger(['Chat John',
    'Spam Let\'s go to the zoo',
    'Edit zoo cinema',
    'Chat tonight',
    'Pin John',
    'End']);



    /*

    while (arrInput[0] !== 'End') {
        let info = arrInput.shift().split(' ');
        let command = info.shift();

        switch (command) {
            case 'Chat':
                chatHistory = chat(info);
                break;
            case 'Delete':
                chatHistory = deleteFunction(info);
                break;
            case 'Edit':
                chatHistory = edit(info);
                break;
            case 'Pin':
                chatHistory = pin(info);
                break;
            case 'Spam':
                chatHistory = spam(info);
                break;
        }
    }

    */