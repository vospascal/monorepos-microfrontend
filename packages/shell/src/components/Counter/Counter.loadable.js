/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from "./../../../../shared/utils/loadable";

const Counter = lazyLoad(
  () => import("./Counter"),
  (module) => module.Counter
);

export default Counter;
