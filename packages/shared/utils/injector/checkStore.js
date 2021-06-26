import conformsTo from "lodash-es/conformsTo";
import isFunction from "lodash-es/isFunction";
import isObject from "lodash-es/isObject";
import invariant from "invariant";

/**
 * Validates the redux store is set up properly to work with this library.
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    runSaga: isFunction,
    createReducer: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };
  invariant(
    conformsTo(store, shape),
    "(redux-injectors...) checkStore: Expected a redux store that has been configured for use with redux-injectors."
  );
}
