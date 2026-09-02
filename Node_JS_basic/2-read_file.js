const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);
    const headers = {};
    students.forEach((student) => {
      const parts = student.split(',');
      const name = parts[0];
      const header = parts[3];

      if (!headers[header]) {
        headers[header] = [];
      }
      headers[header].push(name);
    });

    Object.keys(headers).forEach((header) => {
      console.log(
        `Number of students in ${header}: ${headers[header].length}. List: ${headers[header].join(', ')}`
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;