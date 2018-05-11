import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import checkStore from './checkStore';

export function injectAsyncEpics(store, isValid) {
  return function injectEpics({ key, epic }) {
    if (!isValid) checkStore(store);

    store.epic$.next(epic);
  };
}

/**
 * Helper for creating injectors
 */
export default function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectEpics: injectAsyncEpics(store, true),
  };
}
