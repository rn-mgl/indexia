import type {
  SortingAlgorithm,
  SortingAlgorithmId,
} from "@/src/interfaces/sorting.interface";
import { createFrameRecorder } from "./sorting.util";

export const quickSort: SortingAlgorithm = (values) => {
  const recorder = createFrameRecorder(values);

  const sort = (lowIndex: number, highIndex: number) => {
    if (lowIndex > highIndex) return;

    if (lowIndex === highIndex) {
      recorder.markSettled(lowIndex);
      recorder.capture();
      return;
    }

    const pivotIndex = highIndex;
    const pivotValue = recorder.getValues()[pivotIndex];

    let storeIndex = lowIndex;

    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
      recorder.capture({ activeIndices: [currentIndex], pivotIndex });

      if (recorder.getValues()[currentIndex] < pivotValue) {
        recorder.swap(storeIndex, currentIndex);

        storeIndex++;

        recorder.capture({
          activeIndices: [storeIndex - 1, currentIndex],
          pivotIndex,
        });
      }
    }

    recorder.swap(storeIndex, pivotIndex);
    recorder.markSettled(storeIndex);

    recorder.capture();

    sort(lowIndex, storeIndex - 1);
    sort(storeIndex + 1, highIndex);
  };

  recorder.capture();

  sort(0, recorder.getValues().length - 1);

  return recorder.getFrames();
};

export const insertionSort: SortingAlgorithm = (values) => {
  const recorder = createFrameRecorder(values);
  const valueCount = recorder.getValues().length;

  recorder.capture();

  for (let currentIndex = 1; currentIndex < valueCount; currentIndex++) {
    let compareIndex = currentIndex;

    while (
      compareIndex > 0 &&
      recorder.getValues()[compareIndex - 1] > recorder.getValues()[compareIndex]
    ) {
      recorder.capture({ activeIndices: [compareIndex - 1, compareIndex] });

      recorder.swap(compareIndex - 1, compareIndex);

      compareIndex--;
    }

    recorder.capture({ activeIndices: [compareIndex] });
  }

  for (let settledIndex = 0; settledIndex < valueCount; settledIndex++) {
    recorder.markSettled(settledIndex);
  }

  recorder.capture();

  return recorder.getFrames();
};

export const bubbleSort: SortingAlgorithm = (values) => {
  const recorder = createFrameRecorder(values);
  const valueCount = recorder.getValues().length;

  recorder.capture();

  for (let passIndex = 0; passIndex < valueCount - 1; passIndex++) {
    let swapped = false;

    for (
      let currentIndex = 0;
      currentIndex < valueCount - 1 - passIndex;
      currentIndex++
    ) {
      recorder.capture({ activeIndices: [currentIndex, currentIndex + 1] });

      if (
        recorder.getValues()[currentIndex] >
        recorder.getValues()[currentIndex + 1]
      ) {
        recorder.swap(currentIndex, currentIndex + 1);

        swapped = true;

        recorder.capture({ activeIndices: [currentIndex, currentIndex + 1] });
      }
    }

    const settledIndex = valueCount - 1 - passIndex;

    recorder.markSettled(settledIndex);

    recorder.capture();

    if (!swapped) {
      for (
        let remainingIndex = 0;
        remainingIndex < settledIndex;
        remainingIndex++
      ) {
        recorder.markSettled(remainingIndex);
      }

      recorder.capture();

      break;
    }
  }

  for (let settledIndex = 0; settledIndex < valueCount; settledIndex++) {
    recorder.markSettled(settledIndex);
  }

  recorder.capture();

  return recorder.getFrames();
};

export const sortingAlgorithms = {
  quickSort,
  insertionSort,
  bubbleSort,
} satisfies Record<SortingAlgorithmId, SortingAlgorithm>;
