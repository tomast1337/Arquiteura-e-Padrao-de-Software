import ISortingStrategy from ".";

class BubbleSort implements ISortingStrategy {
  sort(arr: number[]): number[] {
    console.log("Sorting using Bubble Sort");
    // Implementation of Bubble Sort
    const sorted = this.bubbleSort(arr);
    return sorted;
  }
  bubbleSort(arr: number[]): number[] {
    // make a copy of the array
    const sorted = [...arr] as number[];
    // loop through the array
    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length; j++) {
        if (sorted[j] > sorted[j + 1]) {
          const temp = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = temp;
        }
      }
    }
    return sorted;
  }
}

export default BubbleSort;
