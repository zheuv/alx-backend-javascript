export default class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(valeur) {
    this._name = valeur;
  }

  get code() {
    return this._code;
  }

  set code(valeur) {
    this._code = valeur;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
