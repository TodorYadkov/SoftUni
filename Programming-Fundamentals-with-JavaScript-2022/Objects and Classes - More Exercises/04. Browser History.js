function browserHistory(obj, array) {

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        switch (command[0]) {
            case 'Open':
                obj['Open Tabs'].push(command[1]);
                obj['Browser Logs'].push(array[i]);
                break;
            case 'Close':
                if (obj['Open Tabs'].includes(command[1])) {
                    let removeIndex = obj['Open Tabs'].indexOf(command[1]);
                    obj['Open Tabs'].splice(removeIndex, 1);
                    obj['Recently Closed'].push(command[1]);
                    obj['Browser Logs'].push(array[i]);
                }
                break;
            case 'Clear':
                obj['Open Tabs'].splice(0);
                obj['Recently Closed'].splice(0);
                obj['Browser Logs'].splice(0);
                break;
        }
    }
    for (let prop in obj) {
        if (prop === 'Browser Name') {
            console.log(obj[prop]);
        } else if (prop === 'Open Tabs') {
            console.log(`Open Tabs: ${obj[prop].join(', ')}`);
        } else if (prop === 'Recently Closed') {
            console.log(`Recently Closed: ${obj[prop].join(', ')}`);
        } else if (prop === 'Browser Logs') {
            console.log(`Browser Logs: ${obj[prop].join(', ')}`);
        }
    }
}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]); 