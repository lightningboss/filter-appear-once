export function filterElementsThatAppearOnce(arr1, arr2) {
    const concatArray = [...arr1, ...arr2];
    const sortedConcatArray = concatArray.sort();

    return sortedConcatArray.filter((el) => (
        numberOfOccurrencesInArray(sortedConcatArray, el) < 2
    ));
}

export function numberOfOccurrencesInArray(array, query) {
    return array.filter((el) => (
        el.toLowerCase().trim() === query.toLowerCase().trim()
    )).length;
}
