const fs = require('fs').promises;

function countStudents(path) {
	return promise(async(resolve, reject) => {
		try {
			const data = await fs.readfile(path, 'utf8');
			const lines = data.trim().split('\n');
			if (lines.length <= 1) {
				throw new Error('Cannot load the database');
			}
			const students = lines.slice(1).filter(line => line.trim() !== '');
			const fields = {}
			students.forEach(student => {
				const [firstname, , , field] = student.split(',');
				if (fields[field]) {
					feilds[field].push(firstname);
				} else {
					fields[field] = [firstname];
				}
			});
			for (const[field, firstnames] of Object.entries(fields)) {
				console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
			}
			resolve();
		} catch (err) {
			reject(new Error('Cannot load the database'));
		}
	});
}

module.exports = countStudents;
