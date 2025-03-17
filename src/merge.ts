export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let n: number = collection_1.length;
    let m: number = collection_2.length;

    for (let i: number = 0, j: number = 0, k: number = collection_3.length - 1; i < n || j < m || k >= 0;) {
        let tmpMin: number | undefined;
        if (i < n) tmpMin = collection_1[i];
        if (j < m && (tmpMin === undefined || (tmpMin > collection_2[j]))) tmpMin = collection_2[j];
        if (k >= 0 && (tmpMin === undefined || (tmpMin > collection_3[k]))) tmpMin = collection_3[k];

        if (i < n && (tmpMin === collection_1[i])) result.push(collection_1[i++]);
        else if (j < m && (tmpMin === collection_2[j])) result.push(collection_2[j++]);
        else if (k >= 0 && (tmpMin === collection_3[k])) result.push(collection_3[k--]);

    }

    return result;

}
