"use client";

import { useEffect, useMemo, useState } from "react";
import type { SortingAnimationProps } from "@/src/interfaces/sorting.interface";
import { sortingAlgorithms } from "@/src/utils/sorting.algorithms";
import {
  PAUSE_MS,
  shuffleValues,
  START_VALUES,
  STEP_MS,
} from "@/src/utils/sorting.util";

export default function SortingAnimation(props: SortingAnimationProps) {
  const algorithmId = props.algorithm;
  const initialValues = props.initialValues ?? START_VALUES;
  const stepMs = props.stepMs ?? STEP_MS;
  const pauseMs = props.pauseMs ?? PAUSE_MS;

  const sortAlgorithm = sortingAlgorithms[algorithmId];

  const [playback, setPlayback] = useState({
    inputValues: initialValues,
    frameIndex: 0,
  });

  const frames = useMemo(
    () => sortAlgorithm(playback.inputValues),
    [sortAlgorithm, playback.inputValues],
  );

  const frameIndex = Math.min(playback.frameIndex, frames.length - 1);
  const currentFrame = frames[frameIndex];

  // Auto-play: next frame every stepMs; at the end, wait, reshuffle, start again.
  useEffect(() => {
    const isFinished = frameIndex >= frames.length - 1;
    const timeoutId = setTimeout(
      () =>
        setPlayback((previousPlayback) =>
          isFinished
            ? {
                inputValues: shuffleValues(previousPlayback.inputValues),
                frameIndex: 0,
              }
            : { ...previousPlayback, frameIndex: frameIndex + 1 },
        ),
      isFinished ? pauseMs : stepMs,
    );

    return () => clearTimeout(timeoutId);
  }, [frameIndex, frames.length, pauseMs, stepMs]);

  if (!currentFrame) return null;

  const valueCount = currentFrame.values.length;

  const bars = currentFrame.values.map((value, index) => {
    const isSettled = currentFrame.settledIndices.includes(index);

    const barColor = isSettled
      ? "bg-[#A3FF12]"
      : currentFrame.activeIndices.includes(index)
        ? "bg-[#00D9F5]"
        : index === currentFrame.pivotIndex
          ? "bg-[#FFB547]"
          : "bg-[#3B4560]";

    return (
      <div
        key={value} // key = the value, so React MOVES the bar and the transition slides it
        className="absolute bottom-0 left-0 box-border px-px transition-transform ease-in-out"
        style={{
          width: `${100 / valueCount}%`,
          height: `${(value / valueCount) * 100}%`,
          transform: `translateX(${index * 100}%)`,
          transitionDuration: `${stepMs}ms`,
        }}
      >
        <div
          className={`h-full rounded-t-xs transition-colors ${barColor}`}
          style={{ transitionDuration: `${stepMs}ms` }}
        />
      </div>
    );
  });

  return <div className="relative h-full w-full">{bars}</div>;
}
