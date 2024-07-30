export default function getListStudentIds(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return [];
  }
  return students.map((student) => student.id);
}
