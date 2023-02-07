import {LoaderFunctionArgs} from "react-router-dom";

export const ResourceLoader = async (e: LoaderFunctionArgs) => {
    console.log('Resource local ', localStorage.getItem(e.params.serviceId+''));
    return e;
}
