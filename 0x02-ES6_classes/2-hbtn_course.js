export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateArrayOfStrings(students, 'Students');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._validateString(value, 'Name');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateNumber(value, 'Length');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._validateArrayOfStrings(value, 'Students');
    this._students = value;
  }

  _validateString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
  }

  _validateNumber(value, name) {
    if (typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    }
  }

  _validateArrayOfStrings(value, name) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${name} must be an array of strings`);
    }
  }
}
