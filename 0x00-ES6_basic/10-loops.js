export default function appendToEachArrayValue(array, appendString) {
  const Array2 = [];
  for (const variable of array) {
    Array2.push(appendString + variable);
  }

  return returnArray;
}
