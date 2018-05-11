/**
 * Usage - For Dependency Injection
 * Ex. Github repos request/response handler
 *
 * const getReposEpic = (action$, state$, call = indirect.call) =>
 * action$.ofType(LOAD_REPOS)
 * .mergeMap(() =>
 *  call(api.fetchGithub, selectUsername(state$))
 *    .map((repos) => reposLoaded(repos, selectUsername(state$)))
 *    .catch((err) => Observable.of(repoLoadingError(err)))
 * );
 */

export const indirect = {
  call: (fn, ...args) => fn(...args),
};
