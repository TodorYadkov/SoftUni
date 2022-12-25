function tickets(ticketsArr, sortedType) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };

    const result = [];
    for (let line of ticketsArr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status))
    };

    switch (sortedType) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
    };

    return result;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.2|departed'],
    'destination'));

// console.log(tickets(['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'status'));
