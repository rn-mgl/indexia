import type {
  FrameHighlights,
  SortFrame,
} from "@/src/interfaces/sorting.interface";

export const START_VALUES = [
  17, 3, 22, 9, 14, 1, 20, 6, 24, 11, 5, 18, 2, 13, 8, 21, 16, 4, 23, 10, 7, 19,
  12, 15,
];

export const STEP_MS = 120;

export const PAUSE_MS = 1200;

export function shuffleValues(values: readonly number[]): number[] {
  const shuffledValues = [...values];

  for (let fromIndex = shuffledValues.length - 1; fromIndex > 0; fromIndex--) {
    const toIndex = Math.floor(Math.random() * (fromIndex + 1));
    [shuffledValues[fromIndex], shuffledValues[toIndex]] = [
      shuffledValues[toIndex],
      shuffledValues[fromIndex],
    ];
  }

  return shuffledValues;
}

export function createFrameRecorder(input: readonly number[]) {
  const values = [...input];
  const frames: SortFrame[] = [];
  const settledIndices = new Set<number>();

  return {
    getValues: (): readonly number[] => values,
    getFrames: (): readonly SortFrame[] => frames,

    capture(highlights: FrameHighlights = {}) {
      const { activeIndices = [], pivotIndex = null } = highlights;

      frames.push({
        values: [...values],
        activeIndices: [...activeIndices],
        pivotIndex,
        settledIndices: [...settledIndices],
      });
    },

    markSettled(index: number) {
      settledIndices.add(index);
    },

    swap(leftIndex: number, rightIndex: number) {
      [values[leftIndex], values[rightIndex]] = [
        values[rightIndex],
        values[leftIndex],
      ];
    },

    setValue(index: number, value: number) {
      values[index] = value;
    },
  };
}
