export default hasValuesFromArray;

const hasValuesFromArray = (set, array => array.every((value) => set.has(value)));