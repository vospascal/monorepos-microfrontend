import { createBrowserHistory } from "history";

const getBaseUrl = () => "/";
const history = createBrowserHistory({
  basename: getBaseUrl(),
});

export default history;
