import ISortingStrategy from ".";

class MergeSort implements ISortingStrategy {
  sort(arr: number[]): number[] {
    console.log("Sorting using Merge Sort");
    const sorted = this.mergeSort(arr);
    return sorted;
  }

    mergeSort(arr: number[]): number[] {
        // make a copy of the array
        const sorted = [...arr] as number[];
        // if the array has only one element, return it
        if (sorted.length === 1) {
            return sorted;
        }
        // find the middle index
        const middleIndex = Math.floor(sorted.length / 2);
        // split the array into two halves
        const left = sorted.slice(0, middleIndex);
        const right = sorted.slice(middleIndex);
        // recursively call mergeSort on both halves
        return this.merge(this.mergeSort(left), this.mergeSort(right));
    }
    merge(left: number[], right: number[]): number[] {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
        // while there are elements in both arrays
        while (leftIndex < left.length && rightIndex < right.length) {
            // if the left element is less than the right element
            if (left[leftIndex] < right[rightIndex]) {
                // push the left element into the result array
                result.push(left[leftIndex]);
                // increment the left index
                leftIndex++;
            } else {
                // push the right element into the result array
                result.push(right[rightIndex]);
                // increment the right index
                rightIndex++;
            }
        }
        // if there are elements in the left array, push them into the result array
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}

export default MergeSort;
