class Bank {
    #bankName;
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const searchedCustomer = this.allCustomers.find(c => {
            if (c.firstName === customer.firstName &&
                c.lastName === customer.lastName &&
                c.personalId === customer.personalId) {
                return c;
            }
        });

        if (searchedCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        const tempObject = { totalMoney: 0, transactionHistiry: [] };
        this.allCustomers.push(Object.assign(tempObject, customer));
        return customer;
    }

    depositMoney(personalId, amount) {
        const searchedCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (searchedCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        searchedCustomer.totalMoney += amount;
        searchedCustomer.transactionHistiry.push(`${searchedCustomer.transactionHistiry.length + 1}. ${searchedCustomer.firstName} ${searchedCustomer.lastName} made deposit of ${amount}$!`);

        return `${searchedCustomer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const searchedCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (searchedCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        if (searchedCustomer.totalMoney < amount) {
            throw new Error(`${searchedCustomer.firstName} ${searchedCustomer.lastName} does not have enough money to withdraw that amount!`);
        }

        searchedCustomer.totalMoney -= amount;
        searchedCustomer.transactionHistiry.push(`${searchedCustomer.transactionHistiry.length + 1}. ${searchedCustomer.firstName} ${searchedCustomer.lastName} withdrew ${amount}$!`);

        return `${searchedCustomer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const searchedCustomer = this.allCustomers.find(c => c.personalId === personalId);

        if (searchedCustomer === undefined) {
            throw new Error('We have no customer with this ID!');
        }

        const printArr = [
            `Bank name: ${this.#bankName}`,
            `Customer name: ${searchedCustomer.firstName} ${searchedCustomer.lastName}`,
            `Customer ID: ${searchedCustomer.personalId}`,
            `Total Money: ${searchedCustomer.totalMoney}$`,
            'Transactions:',
            `${searchedCustomer.transactionHistiry.reverse().join('\n')}`,
        ];

        return printArr.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));  // { firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 } 
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 })); // { firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));   // 500$
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));  // 375$
console.log(bank.customerInfo(6233267));        // Bank name: SoftUni Bank
                                                // Customer name: Svetlin Nakov
                                                // Customer ID: 6233267
                                                // Total Money: 375$
                                                // Transactions:
                                                // 3. Svetlin Nakov withdrew 125$!
                                                // 2. Svetlin Nakov made depostit of 250$!
                                                // 1. Svetlin Nakov made depostit of 250$!