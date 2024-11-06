import { renderHook, waitFor } from '@testing-library/react';

import { useDataStore } from '../DataStore';
import { useStepStore } from '../StepsStore';

describe('Test Store useDataStore', () => {
  // The function sets the 'needs' property with the expected values when calling 'setCapital' with invalid input.
  it('Set personalData', () => {
    const { result } = renderHook(() => useDataStore());

    waitFor(() => {
      result.current.setter({
        personal: {
          name: 'Alvaro',
          surname: 'test',
          nationality: 'Española',
          dni: '74857485W',
          date: '27/1/2024',
          civil: null,
          gender: null,
          profession: null,
        },
      });
    });

    expect(result.current.personal).toBeDefined();
  });

  it('Set contactData', () => {
    const { result } = renderHook(() => useDataStore());

    waitFor(() => {
      result.current.setter({
        contact: {
          email: 'tets@nn.es',
          phone: '654654654',
          acceptsAccount: true,
          acceptsMarketing: false,
        },
      });
    });

    expect(result.current.contact).toBeDefined();
  });

  it('should set the start property with the expected values when calling setter with invalid input', () => {
    const { result } = renderHook(() => useDataStore());

    waitFor(() => {
      result.current.setter({ status: { start: false } });
    });

    expect(result.current.status.start).toBe(false);
  });
});

describe('useStepStore', () => {
  // The function sets the initial state of step to 1 and subStep to 0.
  it('should set the initial state of step and subStep', () => {
    const { result } = renderHook(() => useStepStore());

    waitFor(() => {
      result.current.set(1);
    });

    expect(result.current.step).toBe(1);
  });
});
