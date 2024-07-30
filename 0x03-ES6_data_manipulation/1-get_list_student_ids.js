export default function getListStudentIds(students) {
  if (!Array.isarray(students) || students.length === 0) {
    return [];
  }
  return students.map((student) => student.id);
}
