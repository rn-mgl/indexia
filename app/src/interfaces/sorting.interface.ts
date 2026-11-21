export interface SortFrame {
  readonly values: readonly number[];
  readonly activeIndices: readonly number[];
  readonly pivotIndex: number | null;
  readonly settledIndices: readonly number[];
}

export interface FrameHighlights {
  activeIndices?: readonly number[];
  pivotIndex?: number | null;
}

export type SortingAlgorithm = (
  values: readonly number[],
) => readonly SortFrame[];

export type SortingAlgorithmId = "quickSort" | "insertionSort" | "bubbleSort";

export interface SortingAnimationProps {
  algorithm: SortingAlgorithmId;
  initialValues?: readonly number[];
  stepMs?: number;
  pauseMs?: number;
}
