import React from 'react';
import {useRouteError} from "react-router-dom";

const Error = () => {
    useRouteError()
    return (
        <div>
           Error Element
        </div>
    );
};

export default Error;
