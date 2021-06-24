import React from 'react';

import { useSelector } from "react-redux";
import Toggle from "./components/Toggle/Toggle";

const Content = () => {
    const counter = useSelector((state) => state?.counter?.value);
    const toggle = useSelector((state) => state?.toggle?.value);
    return (
        <div style={{border: '2px dashed cornflowerBlue', padding: '5px', margin: '5px'}}>
            <Toggle></Toggle>
            <pre>{JSON.stringify(counter)}</pre>
            <pre>{JSON.stringify(toggle)}</pre>
            content!
        </div>
    )
}

export default Content