const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim().length > 0);

        // Skip the header (first line)
        const students = lines.slice(1);
        const studentsCount = students.length;

        if (studentsCount === 0) {
            console.log('Number of students: 0');
            return;
        }
        console.log(`Number of students: ${studentsCount}`);

        const fields = {};
        students.forEach((student) => {
            const [firstname, , , field] = student.split(",");

            if (fields[field]) {
                fields[field].push(firstname);
            } else {
                fields[field] = [firstname];
            }
        });

        for (const [field, firstnames] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
        }

    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
