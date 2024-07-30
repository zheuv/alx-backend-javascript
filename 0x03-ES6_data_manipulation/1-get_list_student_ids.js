export default function getListStudentIds(students) {
  if (!Array.isarray(students) || students.length === 0) {
    return [];
  }
  ids = students.map((student) => student.id);
  return ids;
}
