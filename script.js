const users = [
    { name: "Олексій", age: 20, city: "Харків", colors: ["червоний", "чорний"], isStudent: true, grades: [85, 90, 92, 88] },
    { name: "Марюша", age: 18, city: "Ірпінь", colors: ["блактиний", "рожевий"], isStudent: true, grades: [90, 95, 98, 92] },
    { name: "Іван", age: 22, city: "Львів", colors: ["синій", "білий"], isStudent: false, grades: [40, 55, 50, 48] }
];

const getAverage = (gradesArr) => {
    if (gradesArr.length === 0) return 0;
    let sum = 0;
    for (const grade of gradesArr) {
        sum += grade;
    }
    return sum / gradesArr.length;
};

const getStatus = (average) => {
    if (average >= 90) return "Відмінно";
    if (average >= 75) return "Добре";
    if (average >= 60) return "Задовільно";
    return "Незадовільно (Потрібна перездача)";
};

console.log("ЗВІТ ПО СТУДЕНТАХ");
for (const user of users) {
    const avgGrade = getAverage(user.grades);
    const status = getStatus(avgGrade);
    const favColors = user.colors.join(", ");
    const studentInfo = user.isStudent ? "Діючий студент" : "Випускник/Гість";

    console.log(`Ім'я: ${user.name} (${user.city})`);
    console.log(`Статус: ${studentInfo}`);
    console.log(`Улюблені кольори: ${favColors}`);
    console.log(`Середній бал: ${avgGrade.toFixed(1)} - ${status}`);
    console.log("-----------------------");
}

console.log("\nЗавдання 1");
const students = [
    { name: "Генадій", course: 3, gpa: 82 },
    { name: "Марюша", course: 2, gpa: 100 },
    { name: "Святослав", course: 1, gpa: 88 },
    { name: "Сергій", course: 4, gpa: 95 },
    { name: "Влад", course: 2, gpa: 75 }
];

const filterAndSortStudents = (studentsArr) => {
    return studentsArr
        .filter(student => student.gpa > 85)
        .sort((a, b) => a.course - b.course);
};

console.log("Студенти з балом > 85, відсортовані за курсом:");
console.log(filterAndSortStudents(students));

console.log("\nЗавдання 4");
const isAnagram = (str1, str2) => {
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
};

console.log("Чи є 'Listen' та 'Silent' анаграмами?", isAnagram("Listen", "Silent"));
console.log("Чи є 'Hello' та 'World' анаграмами?", isAnagram("Hello", "World"));
console.log("Чи є 'А роза упала на лапу Азора' та 'Азора лапу на упала роза А' анаграмами?", isAnagram("А роза упала на лапу Азора", "Азора лапу на упала роза А"));


console.log("\nЗавдання 10");
const transactions = [
    { category: "їжа", amount: 1500 },
    { category: "транспорт", amount: 300 },
    { category: "їжа", amount: 500 },
    { category: "розваги", amount: 800 },
    { category: "транспорт", amount: 200 }
];

const aggregateExpenses = (transactionsArr) => {
    return transactionsArr.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});
};

console.log("Агреговані витрати за категоріями:");
console.log(aggregateExpenses(transactions));