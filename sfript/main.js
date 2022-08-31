const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

let divide = getDivide(students); // Розділіть студентів на пари
console.log(divide);
window.document.writeln(`<p> 1 - ${divide.join(" | ")}</p>`);

let addProject = projectTopics(divide, themes); // Зіставте пари з попереднього завдання та теми проєктів
console.log(addProject);
window.document.writeln(`<p> 2 - ${addProject.join(" | ")}</p>`);

let reting = rating(students, marks); // Зіставте оцінки(marks) зі студентом(students)
console.log(reting);
window.document.writeln(`<p> 3 - ${reting.join(" | ")}</p>`);

let random = randomNumber(divide, themes); // Поставте кожній парі випадкову оцінку(від 1 до 5)
console.log(random);
window.document.writeln(`<p> 4 - ${random.join(" | ")}</p>`);

/*Розділіть студентів на пари
(хлопець + дівчина) для работи над проєктом. 
У вас повинен вийти вкладений масив з парами студентів: 
[["Олександр", "Олена"], [..], [...]]; */

function getDivide(students) {
    let addSteam = [];
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

/* Зіставте пари з попереднього завдання та теми проєктів,
над якими студенти будуть працювати. Повинен вийти вкладений масив виду:
[["Олександр і Олена", "Теорія автоматів"], [...], [...]] */

function projectTopics(team, them) {
    let teamProject = [];
    for (let i = 0; i < team.length; i++) {
        teamProject.push([divide[i], them[i]].flat());
    }
    return teamProject;
}

/*Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]] */

function rating(stud, mark) {
    let studReting = [];
    for (let i = 0; i < stud.length; i++) {
        studReting.push([stud[i], mark[i]]);
    }
    return studReting;
}

/* Поставте кожній парі випадкову оцінку(від 1 до 5) 
за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]*/

function randomNumber(team, them) {
    let randNumber = [];
    for (let i = 0; i < team.length; i++) {
        let num = Math.floor(Math.random() * (6 - 1) + 1);
        randNumber.push([divide[i], them[i], num].flat());
    }

    return randNumber;
}
