function matchPhoneNumber(str) {
    let pattern = /\+359([- ])2\1\d{3}\1\d{4}\b/g;
    let match = pattern.exec(str);
    let validNumber = [];

    while (match !== null) {
        validNumber.push(match[0]);

        match = pattern.exec(str);
    }
    console.log(validNumber.join(', '));
}

// matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");
matchPhoneNumber("+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222");