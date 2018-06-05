import invariant from 'invariant';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import checkStore from './checkStore';

export function injectAsyncEpics(store, isValid) {
  return function injectEpics({ epic }) {
    if (!isValid) checkStore(store);
    invariant(
      isFunction(epic) || isEmpty(epic),
      '(app/utils...) injectEpic: Expected `epic` to be a function'
    );

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
