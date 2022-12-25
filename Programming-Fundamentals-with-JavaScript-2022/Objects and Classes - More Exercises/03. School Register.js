function schoolRegister(array) {
  class Students {
    constructor(name, grade, avGrade) {
      this.name = name;
      this.grade = Number(grade);
      this.avGrade = Number(avGrade);
    }
  }

  let listOfStudents = [];
  for (let el of array) {
    let workArray = el.split(': ').join(',').split(',');
    let name = workArray[1];
    let grade = Number(workArray[3]);
    let avGrade = Number(workArray[5]);
    if (avGrade < 3) {
      continue;
    } else {
      listOfStudents.push(new Students(name, grade, avGrade));
    }
  }
  listOfStudents.sort((a, b) => a.grade - b.grade);

  let nextGrade = listOfStudents[0].grade;
  let averageClassGrade = 0;
  let classmate = [];
  let countGrade = 0;
  for (let i = 0; i < listOfStudents.length; i++) {

    averageClassGrade += listOfStudents[i].avGrade;
    classmate.push(listOfStudents[i].name);
    countGrade++;

    if (listOfStudents[i + 1] === undefined) {
      nextGrade = listOfStudents[listOfStudents.length - 1].grade;
    } else {
      nextGrade = listOfStudents[i + 1].grade;
    }

    if ((nextGrade !== listOfStudents[i].grade) || (listOfStudents[i + 1] === undefined)) {
      console.log(`${listOfStudents[i].grade + 1} Grade\nList of students: ${classmate.join(', ')}\nAverage annual score from last year: ${(averageClassGrade / countGrade).toFixed(2)}\n`);
      classmate = [];
      countGrade = 0;
      averageClassGrade = 0;
    }
  }
}
schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);

schoolRegister([
  'Student name: George, Grade: 5, Graduated with an average score: 2.75',
  'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
  'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
  'Student name: John, Grade: 9, Graduated with an average score: 2.90',
  'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
  'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);