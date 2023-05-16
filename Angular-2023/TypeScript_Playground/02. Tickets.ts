class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function manageTickets(tickets: string[], sortBy: string): Ticket[] {
    const sortCriteria = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status),
    }

    const allTickets = tickets.map(t => {
        const currentTicket = t.split('|');
        return new Ticket(currentTicket[0], Number(currentTicket[1]), currentTicket[2]);
    });

    return allTickets.sort(sortCriteria[sortBy]);
}

console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
))

console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
))

console.log(manageTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price'
))