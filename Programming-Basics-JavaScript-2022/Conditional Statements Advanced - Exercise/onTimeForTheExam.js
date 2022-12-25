function onTimeForTheExam(input) {
    let beginExamHours = Number(input[0]);
    let beginExamMinutes = Number(input[1]);
    let arriveStudentsHours = Number(input[2]);
    let arriveStudentsMinutes = Number(input[3]);
    let convertHoursToMinutesExam = beginExamHours * 60;
    let convertHoursToMinutesStudents = arriveStudentsHours * 60;
    let totalTimeMinutesExam = convertHoursToMinutesExam + beginExamMinutes;
    let totalTimeMinutesStudents = convertHoursToMinutesStudents + arriveStudentsMinutes;

    if (totalTimeMinutesExam < totalTimeMinutesStudents) {
        console.log("Late");
        if ((totalTimeMinutesStudents - totalTimeMinutesExam) < 60) {
            console.log(`${totalTimeMinutesStudents - totalTimeMinutesExam} minutes after the start`);
        } else {
            let totalLateMinutes = totalTimeMinutesStudents - totalTimeMinutesExam;
            let lateHours = Math.floor(totalLateMinutes / 60);
            let lateMinutes = totalLateMinutes % 60;
            if (lateHours >= 24) {
                lateHours -= 24;
            }
            if (lateMinutes < 10) {
                console.log(`${lateHours}:0${lateMinutes} hours after the start`);
            } else {
                console.log(`${lateHours}:${lateMinutes} hours after the start`);
            }
        }
    } else if (totalTimeMinutesExam >= totalTimeMinutesStudents) {
            if ((totalTimeMinutesExam - totalTimeMinutesStudents) == 0) {
                console.log("On time");
            } else if ((totalTimeMinutesExam - totalTimeMinutesStudents) <= 30) {
                console.log("On time");
                console.log(`${totalTimeMinutesExam - totalTimeMinutesStudents} minutes before the start`);
            } else if ((totalTimeMinutesExam - totalTimeMinutesStudents) > 30 && (totalTimeMinutesExam - totalTimeMinutesStudents) < 60) {
                console.log("Early");
                console.log(`${totalTimeMinutesExam - totalTimeMinutesStudents} minutes before the start`);
            } else if ((totalTimeMinutesExam - totalTimeMinutesStudents) >= 60) {    
                console.log("Early");
                let totalEarlyMinutes = totalTimeMinutesExam - totalTimeMinutesStudents;
                let earlyHours = Math.floor(totalEarlyMinutes / 60);
                let earlyMinutes = totalEarlyMinutes % 60;
                if (earlyHours >= 24) {
                    earlyHours -= 24;
                }
                if (earlyMinutes < 10) {
                    console.log(`${earlyHours}:0${earlyMinutes} hours before the start`);
                } else {
                    console.log(`${earlyHours}:${earlyMinutes} hours before the start`);
                }
            }
    }
}
onTimeForTheExam(["11",
"30",
"12",
"29"])
















