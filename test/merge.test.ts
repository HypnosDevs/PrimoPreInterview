import { merge } from "../src/merge";
describe('merge sorted array', () => {
    test("merge and sort array in asc orders", () => {
        expect(merge([0, 4, 8], [3, 5, 6, 9], [7, 2, 1])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(merge([0, 1, 2, 3], [4, 5, 6], [9, 7])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
        expect(merge([1, 3], [0, 4, 5, 6], [9, 8, 7])).toEqual([0, 1, 3, 4, 5, 6, 7, 8, 9]);
        expect(merge([1, 2, 3], [4, 5], [9, 8, 7, 0])).toEqual([0, 1, 2, 3, 4, 5, 7, 8, 9]);
        expect(merge([], [0, 1, 2, 4], [9, 7, 6, 5])).toEqual([0, 1, 2, 4, 5, 6, 7, 9]);
        expect(merge([1, 4, 8], [], [9, 6, 1])).toEqual([1, 1, 4, 6, 8, 9]);
        expect(merge([1, 4, 8], [4, 5], [])).toEqual([1, 4, 4, 5, 8]);
        expect(merge([], [], [8, 5, 2])).toEqual([2, 5, 8]);
        expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
        expect(merge([], [1, 2, 4], [])).toEqual([1, 2, 4]);
        expect(merge([], [], [])).toEqual([]);

    });
})