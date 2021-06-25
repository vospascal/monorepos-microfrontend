import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleActions, useToggleSlice } from "./Toggle.slice";
import { selectToggleValue } from "./Toggle.selector";

function Toggle() {
  useToggleSlice();
  const toggle = useSelector(selectToggleValue);
  const dispatch = useDispatch();
  const fullState = useSelector((state) => state);

  useEffect(() => {
    console.log(fullState, "fullState");
  }, [fullState]);

  return (
    <div>
      <div>
        <button
          aria-label="Toggle boolean"
          onClick={() => dispatch(toggleActions.toggle())}
        >
          toggle
        </button>
        <span>{JSON.stringify(toggle)}</span>
      </div>
    </div>
  );
}

export default Toggle;
