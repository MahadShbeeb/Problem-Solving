const gukiZAndContest = (count,students) => {
    let studentsRates = {}
    for (student of students){
        studentsRates[student] = 0
    }
    sortedStudents = [... students].sort((a,b)=>b-a)
    studentsRates[sortedStudents[0]] = 1

    for (let i=1;i<count;i++){
      let student = sortedStudents[i]
      let prevStudent = sortedStudents[i-1]
      student === prevStudent?studentsRates[student] = studentsRates[prevStudent]:studentsRates[student] = i+1
    }
    for (student of students){
        console.log(studentsRates[student])
    }
}
console.log(gukiZAndContest(5,[3 ,5 ,3 ,4 ,5]));
