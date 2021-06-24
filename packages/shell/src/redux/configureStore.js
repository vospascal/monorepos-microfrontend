import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter_reducer";
import toggleReducer from "./toggle_reducer";
import dataSlice from "./data_reducer";

import { sagaMiddleware, mySaga } from "./saga";

export default configureStore({
  reducer: {
    counter: counterReducer,
    toggle: toggleReducer,
    data: dataSlice,
  },
  middleware: [sagaMiddleware],
});
// Then run the saga
sagaMiddleware.run(mySaga);
