import ISortingStrategy from "./sorting-strategy";

class ArraySorter {
  private strategy: ISortingStrategy;

  constructor(strategy: ISortingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ISortingStrategy) {
    this.strategy = strategy;
  }

  sortArray(arr: number[]) {
    const sortedArray = this.strategy.sort(arr);
    console.log(`Sorted Array: ${sortedArray}`);
  }
}

export default ArraySorter;
