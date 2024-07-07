import { useCallback, useState, useRef } from "react";

type UseEffectReducer<S, A> = [
  state: S,
  dispatch: (action: A) => void,
];

export function useEffectReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): UseEffectReducer<S, A> {
  const [state, setState] = useState<S>(initialState);
  const ref = useRef<S>(state)
  ref.current = state;

  const dispatch = useCallback((action: A) => {
    const s = reducer(ref.current, action);
    setState(s);
  }, [reducer]);
  return [state, dispatch];
}
