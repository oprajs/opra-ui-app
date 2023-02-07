import React, {useState} from 'react';
import {Outlet, useLoaderData, useParams} from "react-router-dom";
import SideBar from "../components/Layout/SideBar/SideBar";
import ServiceContent from "../components/ServiceContent/ServiceContent";

const Detail = () => {
    let {resourceKey} = useParams();
    const [data] = useState<any>(useLoaderData())

    return (
        <div className="flex w-full h-full">
            <SideBar
                data={{...data}}
            />

            <div
                className="w-full overflow-y-auto px-20 py-10"
            >
                Detail Page
                <ServiceContent/>
                {
                    resourceKey &&
                    (<Outlet/>)
                }
            </div>
        </div>
    );
};

export default Detail;
