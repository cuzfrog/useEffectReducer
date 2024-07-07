# Simply Perform Effect in Reducer

This is not library/dependency. It's a simple pattern you copy and go.

## Why
* [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect).
* Libraries like [useEffectReducer](https://github.com/davidkpiano/useEffectReducer) refer to `useEffect`.
* Performing effects from events while updating state is actually very **simple**: 

## The simple pattern:
```typescript
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
```

## More Implemetations:
* [useEffectReducer](./useEffectReducer.ts)
* [useAsyncEffectReducer](./useAsyncEffectReducer.ts)

## License
By Cause Chung (cuzfrog@gmail.com).

CC0 1.0. To view a copy of this license, visit https://creativecommons.org/publicdomain/zero/1.0/
