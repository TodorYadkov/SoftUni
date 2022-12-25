function projectsCreation(input) {
    let oneProjectsTime = 3;
    let nameArchitect = input[0];
    let numProjects = Number(input[1]);
    let needHours = oneProjectsTime * numProjects;
    console.log(`The architect ${nameArchitect} will need ${needHours} hours to complete ${numProjects} project/s.`)
}
projectsCreation(["George",4])

function projectsCreation1(nameArc,numProj) {
    let oneProjectsTime = 3;
    let needHour = Number(oneProjectsTime*numProj)
    console.log(`The architect ${nameArc} will need ${needHour} hours to complete ${numProj} project/s.`)
}
projectsCreation1("Ivan",6)