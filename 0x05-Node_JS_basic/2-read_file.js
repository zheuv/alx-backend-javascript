const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8');
		const lines = data.split('\n').filter((line) => line.trim().length > 0);

		const students = lines.slice(0);
		studentsCount = students.length;
		if (students.Count === 0) {
			console.log('Number of students: 0');
			return;
		}
		console.log(`Number of students: ${studentCount}`);

		const fields = {}
		studets.forEach((student) => {
			const [firstname, , ,field] = student.split(",");
			if (fields[field]) {
				fields[field].push(firstname);
			} else {
			fields[field] = [firstname];
			}
		});
		for ([field, firstnames] in Object.entries(fields)) {
			console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
		}
	} catch (error) {
		throw new Error ('Cannot load the database');
	}
}

module.exports = countStudents;
