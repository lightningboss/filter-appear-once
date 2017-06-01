import { assert } from 'chai';
import { filterElementsThatAppearOnce, numberOfOccurrencesInArray } from './filter-appear-once';

describe('numberOfOccurrencesInArray', function() {
    // It only works with strings
    const sampleArray = ['1', '2', '2', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '5'];

    it('returns how often an element (string) occurs in an array', function() {
        assert.equal(numberOfOccurrencesInArray(sampleArray, '1'), 1);
        assert.equal(numberOfOccurrencesInArray(sampleArray, '2'), 2);
        assert.equal(numberOfOccurrencesInArray(sampleArray, '3'), 3);
        assert.equal(numberOfOccurrencesInArray(sampleArray, '4'), 4);
        assert.equal(numberOfOccurrencesInArray(sampleArray, '5'), 5);
    });

    it('does not fail if a query is not element of the array', function() {
        assert.equal(numberOfOccurrencesInArray(sampleArray, '0'), 0);
    });
});

describe('filterElementsThatAppearOnce', function() {
    const array1 = ['name1', 'name2', 'name3', 'name4'];
    const array2 = ['name5', 'name6', 'name7', 'name8', 'name1', 'name2'];
    const correctResult = ['name3', 'name4', 'name5', 'name6', 'name7', 'name8'];

    it('returns only the elements of the array that appear once', function() {
        assert.deepEqual(filterElementsThatAppearOnce(array1, array2), correctResult);
    });

    it('returns returns the correct result independent of the order of the arguments', function() {
        assert.deepEqual(filterElementsThatAppearOnce(array2, array1), correctResult);
    });
});
