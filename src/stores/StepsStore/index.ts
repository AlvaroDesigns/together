import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { StepState } from './index.types';

export const useStepStore = create<StepState>()(
  devtools(
    immer((set) => ({
      step: 1,
      set: (step) =>
        set(
          (state) => {
            state.step = step;
          },
          false,
          `Setting step:${step}`,
        ),
    })),
    { name: 'step-storage' },
  ),
);
