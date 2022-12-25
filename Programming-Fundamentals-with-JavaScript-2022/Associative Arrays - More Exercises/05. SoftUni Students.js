function softUniStudent(input) {
  let coursesList = {};

  for (let el of input) {
    if (el.includes(": ")) {
      getCourse(el);
    } else if (el.includes(" with email ")) {
      getStudentInfo(el);
    }
  }

  // Sorted by student count in the course DSC
  let sortedByStudentCount = Object.entries(coursesList).sort((a, b) => b[1].students.length - a[1].students.length);
  // Print final result
  for (let el of sortedByStudentCount) {
    console.log(`${el[0]}: ${el[1].capacity} places left`);
    // Sort the students by their credit DSC
    coursesList[el[0]].students.sort((a, b) => b.credit - a.credit).forEach(prop => console.log(`--- ${prop.credit}: ${prop.userName}, ${prop.email}`));
  }

  // function
  // Save the course name and capacity
  function getCourse(string) {
    let [course, capacity] = string.split(": ");
    capacity = Number(capacity);
    if (!coursesList.hasOwnProperty(course)) {
      coursesList[course] = {
        capacity: capacity,
        students: [],
      };
    } else {
      coursesList[course].capacity += capacity;
    }
    return coursesList;
  }

  // Save the student information
  function getStudentInfo(string) {
    let token = string;
    token = token.split(" with email ");
    let [userName, credits] = token.shift().split("[");
    credits = Number(credits.slice(0, -1));
    let [email, course] = token.join(" joins ").split(" joins ");
    if (coursesList.hasOwnProperty(course) && coursesList[course].capacity > 0) {
      coursesList[course].students.push({
        userName: userName,
        credit: credits,
        email: email,
      });
      coursesList[course].capacity--;
    }
    return coursesList;
  }
}

softUniStudent([
  "JSCore: 4",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

softUniStudent([
  "JavaBasics: 2",
  "user1[25] with email user1@user.com joins C#Basics",
  "C#Advanced: 3",
  "JSCore: 4",
  "user2[30] with email user2@user.com joins C#Basics",
  "user13[50] with email user13@user.com joins JSCore",
  "user1[25] with email user1@user.com joins JSCore",
  "user8[18] with email user8@user.com joins C#Advanced",
  "user6[85] with email user6@user.com joins JSCore",
  "JSCore: 2",
  "user11[3] with email user11@user.com joins JavaBasics",
  "user45[105] with email user45@user.com joins JSCore",
  "user007[20] with email user007@user.com joins JSCore",
  "user700[29] with email user700@user.com joins JSCore",
  "user900[88] with email user900@user.com joins JSCore",
]);

softUniStudent([
  "JavaBasics: 15",
  "user1[26] with email user1@user.com joins JavaBasics",
  "user2[36] with email user11@user.com joins JavaBasics",
  "JavaBasics: 5",
  "C#Advanced: 5",
  "user1[26] with email user1@user.com joins C#Advanced",
  "user2[36] with email user11@user.com joins C#Advanced",
  "user3[6] with email user3@user.com joins C#Advanced",
  "C#Advanced: 1",
  "JSCore: 8",
  "user23[62] with email user23@user.com joins JSCore",
]);