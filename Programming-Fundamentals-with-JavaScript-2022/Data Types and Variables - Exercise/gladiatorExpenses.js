function gladiatorExpenses(lostFight, helmet, sword, shield, armor) {
    let expenses = 0;
    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let brokenArmorCount = 0;
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            brokenHelmetCount++;
        }
        if (i % 3 === 0) {
            brokenSwordCount++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            brokenShieldCount++;
            if (brokenShieldCount % 2 === 0) {
                brokenArmorCount++;
            }
        }

    }
    expenses = (brokenHelmetCount * helmet) +
        (brokenSwordCount * sword) +
        (brokenShieldCount * shield) +
        (brokenArmorCount * armor);
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
