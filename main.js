const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Person{
    constructor(_name) {
        this._name = _name
    }
    get Name(){
        return this._name
    }
    set Name2(nom){
        return this._name = nom
    }
}
class Student extends Person{
    constructor(_name,_year,_grade) {
        super(_name);
        this._year = _year
        this._grade = _grade
        this._grade = 0
    }
    get yea(){
        return this._year
    }
    set years(num){
        return this._year = num
    }
    get grade(){
        return this._grade
    }
    set grade(nums){
        return this._grade = nums
    }
}

Students = []
for (const person of people) {
    Students.push(new Student(person.name,person.year))
}

// Make a class called Academy:
//     - write a static method called exam(students). This method will give each student in the students array a random grade, from 1 to 10. Use the provided function "getRandomNumber". Use the "grade" setter you created earlier, to set each student's grade.
// - write a static method called graduate(students) that returns all the students with a grade of 6 or higher. Use .filter()
// - write a static method called studentLevels(students), which returns an array that looks like this: ["Failed", "Average", "Above Average", "Great"]. Use .map() for this.

class  Academy{
    static exam(Students){
        for (const student of Students) {
            student.grade = getRandomNumber(1, 10)
        }

    }
    graduate(students){
        var b = students.filter(function (student){
            return student.grade >= 6
        })
        return b
    }
    studentLevels(students){
        return students.map(function (student){
            if (student.grade < 5){
                return 'failed'
            }
            else if (student.grade < 8){
                return 'Average'
            }
            else if(student.grade < 9){
                return 'Above average'
            }
            else if (student.grade > 10){
                return 'Great'
            }
        })
    }
    studentInfo(students){
        let c = students.map(function (student){
            return `${student.name}, of year ${student.year} , has a grade of ${student.grade}`
        })
    }
    static  printStudents(students, callbackFc){
        for (const student of students) {
            student(callbackFc(student.name))
        }
    }
    static averageGrade(students){
        return new Promise(resolve ,reject){

            setTimeout(resolve(averageGrade(students)),2000)
            if (students.length < 3){
                reject('lenth less than 3')
            }
        }
    }
}
function averageGrade(students){
    let total = students.reduce(function (accumulator,student){
        return accumulator + student.grade
    })
    return total/students.length
}
function callbackFunction1(name){
    return console.log(name)
}
Academy.averageGrade(Students)
    .then(function (result){
        console.log(result)
})


console.log(JSON.stringify(Students))
console.log(JSON.parse(JSON.stringify(Students)))
