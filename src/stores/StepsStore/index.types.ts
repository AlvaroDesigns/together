import { LoadType } from '@/types/stores';

export interface StepState {
  step: LoadType;
  // eslint-disable-next-line no-unused-vars
  set: (step: LoadType) => void;
}
