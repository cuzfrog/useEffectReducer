import { describe, it, expect } from "vitest";
import { act, renderHook } from "@testing-library/react"
import { useEffectReducer } from "./useEffectReducer.stable-dispatch";

const INIT_STATE = { count: 0 };
type State = typeof INIT_STATE;
const reducer = (state: State, action: { type: 'increment' }): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

describe('useEffectReducer with stable dispatch', () => {
  it('should work', () => {
    const { result } = renderHook(() => useEffectReducer(reducer, INIT_STATE));
    const [state, dispatch] = result.current;
    expect(state.count).toBe(0);

    act(() => dispatch({ type: 'increment' }));
    expect(result.current[0]).toEqual({ count: 1 });
    expect(dispatch).toBe(result.current[1]);

    act(() => dispatch({ type: 'increment' }));
    expect(result.current[0]).toEqual({ count: 2 });
    expect(dispatch).toBe(result.current[1]);
  });
});
