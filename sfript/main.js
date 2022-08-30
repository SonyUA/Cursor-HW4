const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let addSteam = [];
let teamProject = [];
let studReting = [];
let randNumber = [];

/*Розділіть студентів на пари
(хлопець + дівчина) для работи над проєктом. 
У вас повинен вийти вкладений масив з парами студентів: 
[["Олександр", "Олена"], [..], [...]]; */

function getDivide(students) {
    const studentsInner = students.slice();
    const girl = [];
    const man = [];
    for (let i = 0; i < students.length; i++) {
        if (studentsInner[i].substr(-1) === "а") {
            girl.push(studentsInner[i]);
        } else if (studentsInner[i].substr(-1) !== "а") {
            man.push(studentsInner[i]);
        }
    }
    for (let b = 0; b < girl.length; b++) {
        addSteam.push([girl[b], man[b]]);
    }
    return addSteam;
}

let divide = getDivide(students);
console.log(divide);

/* Зіставте пари з попереднього завдання та теми проєктів,
над якими студенти будуть працювати. Повинен вийти вкладений масив виду:
[["Олександр і Олена", "Теорія автоматів"], [...], [...]] */

function projectTopics(team, them) {
    for (let i = 0; i < team.length; i++) {
        teamProject.push([addSteam[i], them[i]].flat());
    }
    return teamProject;
}

let addProject = projectTopics(addSteam, themes);
console.log(addProject);

/*Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]] */

function rating(stud, mark) {
    for (let i = 0; i < stud.length; i++) {
        studReting.push([stud[i], mark[i]]);
    }
    return studReting;
}
let reting = rating(students, marks);
console.log(reting);

/* Поставте кожній парі випадкову оцінку(від 1 до 5) 
за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]*/

function randomNumber(team, them) {
    for (let i = 0; i < team.length; i++) {
        let num = Math.floor(Math.random() * (6 - 1) + 1);
        randNumber.push([addSteam[i], them[i], num].flat());
    }
    return randNumber;
}

let random = randomNumber(addSteam, themes);
console.log(random);
