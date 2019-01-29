import GetRandomAnswer from './getRandomAnswer';

describe('getRandomAnswer', () => {
    it('should not fail if the answer list is empty', function () {
        expect(GetRandomAnswer([])).toBe(undefined);
    });

    it('should not fail if the answer list is undefined', function () {
        expect(GetRandomAnswer(undefined)).toBe(undefined);
    });

    it('should not return one of the values in the list', function () {
        expect(GetRandomAnswer(['a', 'b', 'c'])).toMatch(/[abc]/);
    });
});