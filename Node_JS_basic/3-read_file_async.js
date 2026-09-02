const fs = require('fs'); 

const countStudents = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            reject(new Error('Cannot load the database'));
            return;
        }
        const cleanFile = data.split('\n').slice(1);
        const validStudents = cleanFile.filter((value) => value !== '');
        const cleanValidStudents = validStudents.map((value) => value.trim());
        const studentsArray = cleanValidStudents.map((value) => value.split(','));
        console.log(`Number of students: ${studentsArray.length}`);

        const students = studentsArray.reduce((accumulator, student) => {
            if (accumulator[student[3]]) {
                accumulator[student[3]].push(student[0]);
            } else {
                accumulator[student[3]] = [student[0]];
            }
            return accumulator;
        }, {});

        const keys = Object.keys(students);

        keys.forEach((key) => {
            const studentsCount = students[key].length;
            console.log(`Number of students in ${key}: ${studentsCount}. List: ${students[key].join(', ')}`);
        });
        resolve();
    });
});

module.exports = countStudents;