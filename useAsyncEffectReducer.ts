import { useCallback, useState } from "react";

type UseAsyncEffectReducer<S, A> = [
  state: S,
  dispatch: (action: A) => Promise<void>,
];

export function useAsyncEffectReducer<S, A>(reducer: (state: S, action: A) => Promise<S>, initialState: S): UseAsyncEffectReducer<S, A> {
  const [state, setState] = useState<S>(initialState);
  const dispatch = useCallback(async (action: A) => {
    const s = await reducer(state, action);
    setState(s);
  }, [state, reducer]);
  return [state, dispatch];
}

