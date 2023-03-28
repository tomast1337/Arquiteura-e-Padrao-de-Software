import ArraySorter from "./array-sorter";
import BubbleSort from "./sorting-strategy/bubble-sort";
import MergeSort from "./sorting-strategy/merge-sort";
import QuickSort from "./sorting-strategy/quick-sort";

const main = () => {
  // Usage
  const array = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );

  console.log(`Unsorted Array: ${array}`);

  const arraySorter = new ArraySorter(new BubbleSort());

  console.log(`Sorted with Bubble Sort: ${arraySorter.sortArray(array)}`);

  arraySorter.setStrategy(new QuickSort());

  console.log(`Sorted with Quick Sort: ${arraySorter.sortArray(array)}`);

  arraySorter.setStrategy(new MergeSort());

  console.log(`Sorted with Merge Sort: ${arraySorter.sortArray(array)}`);
};

main();
