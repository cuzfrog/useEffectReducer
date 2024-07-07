import { useCallback, useState } from "react";

type UseEffectReducer<S, A> = [
  state: S,
  dispatch: (action: A) => void,
];

export function useEffectReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): UseEffectReducer<S, A> {
  const [state, setState] = useState<S>(initialState);
  const dispatch = useCallback((action: A) => {
    const s = reducer(state, action);
    setState(s);
  }, [state, reducer]);
  return [state, dispatch];
}

