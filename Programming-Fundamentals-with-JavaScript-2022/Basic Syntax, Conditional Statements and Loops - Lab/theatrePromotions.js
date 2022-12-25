function theatrePromotions(day, age) {
    let price = 0;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case 'Weekday':
                if (age <= 18) {
                    price = 12.00;
                } else if (age <= 64) {
                    price = 18.00;
                } else {
                    price = 12.00;
                }
                break;
            case 'Weekend':
                if (age <= 18) {
                    price = 15.00;
                } else if (age <= 64) {
                    price = 20.00;
                } else {
                    price = 15.00;
                }
                break;
            case 'Holiday':
                if (age <= 18) {
                    price = 5.00;
                } else if (age <= 64) {
                    price = 12.00;
                } else {
                    price = 10.00;
                }
                break;
        }
        console.log(price + '$');
    } else {
        console.log('Error!');
    }
}
theatrePromotions('Holiday', 15)