import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions, useCounterSlice } from "./Counter.slice";
import { selectCounterValue } from "./Counter.selectors";

function Counter() {
  useCounterSlice();

  const count = useSelector(selectCounterValue);
  const dispatch = useDispatch();
  const fullState = useSelector((state) => state);

  useEffect(() => {
    console.log(fullState, "fullState");
  }, [fullState]);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterActions.increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterActions.decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
