function destinationMapper(str) {
    const pattern = /(([\=|\/])(?<location>[A-Z][A-Za-z]{2,})\2)/g;
    let travelPoints = 0;
    let destination = [];
    let token = pattern.exec(str);
    while (token !== null) {
        destination.push(token.groups.location);
        travelPoints += token.groups.location.length;

        token = pattern.exec(str);
    }
    console.log(`Destinations: ${destination.join(', ')}\nTravel Points: ${travelPoints}`);
}
destinationMapper("=HaA=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

// destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
// destinationMapper("ThisIs some InvalidInput");