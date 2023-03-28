import ISortingStrategy from ".";

class QuickSort implements ISortingStrategy {
  sort(arr: number[]): number[] {
    console.log("Sorting using Quick Sort");
    const sorted = this.quickSort(arr);
    return sorted;
  }

  quickSort(arr: number[]): number[] {
    // make a copy of the array
    const sorted = [...arr] as number[];
    // if the array has only one element, return it
    if (sorted.length <= 1) {
      return sorted;
    }
    // find the middle index
    const middleIndex = Math.floor(sorted.length / 2);
    // find the middle element
    const middleElement = sorted[middleIndex];
    // remove the middle element from the array
    sorted.splice(middleIndex, 1);
    // create two arrays, one for elements less than the middle element and one for elements greater than the middle element
    const left = [];
    const right = [];
    // loop through the array and push elements into the left or right array
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] < middleElement) {
        left.push(sorted[i]);
      } else {
        right.push(sorted[i]);
      }
    }
    // recursively call quickSort on both halves
    return this.quickSort(left).concat(middleElement, this.quickSort(right));
  }
}

export default QuickSort;
