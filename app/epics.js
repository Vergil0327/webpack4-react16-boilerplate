import { combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export default function createRootEpic() {
  const epic$ = new BehaviorSubject(combineEpics());

  const rootEpic = (action$, store) =>
    epic$.pipe(
      mergeMap((epic) => epic(action$, store)
    ));

  return { rootEpic, epic$ };
}
