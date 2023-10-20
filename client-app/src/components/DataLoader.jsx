/* eslint-disable react/prop-types */

import {  Await } from "react-router-dom";

import { Suspense } from "react";
import Loading from "./Loading";

const DataLoader = ({ resolve, errorElement, children }) => {
    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={resolve} errorElement={errorElement}>
                {(resolvedData) => children(resolvedData)}
            </Await>
        </Suspense>
    );
};

export default DataLoader;