default export function updateStudentGradeByCity (students, city, newGrades) {
	return students
		.filter(student => student.location === city)
		.map(student => {
			const gradObj = newGrades.find(grade => grade.studentId === student.id);
			return {
				...student,
				grade: gradeObj ? gradObj = "N/A"
			};
		});
}
