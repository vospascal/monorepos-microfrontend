import React from 'react';

import { useSelector, useDispatch } from "react-redux";

const Content = () => {
    const counter = useSelector((state) => state?.counter?.value);
    const toggle = useSelector((state) => state?.toggle?.value);
    return (
        <div>
            <pre>{JSON.stringify(counter)}</pre>
            <pre>{JSON.stringify(toggle)}</pre>
            content!
        </div>
    )
}

export default Content