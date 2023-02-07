import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const SideBar = ({data}: any) => {
    let {serviceId, resourceKey} = useParams();
    const navigate = useNavigate();
    const [navItems, setNavItems] = useState<{ key?: string; data?: any; }[]>([]);

    useEffect(() => {
        let items: { key?: string; data?: string; }[] = [];
        if (data?.resources) {
            for (const key in data.resources) {
                items.push({key, data: data.resources[key]})
            }
        }
        setNavItems(items)
    }, [data?.resources])

    const navigateDetail = (link: string) => {
        navigate(`/${serviceId}/${link}`)
    }

    return (
        <div
            className="max-w-[250px] w-full layout-border-right"
        >
            <div className="flex flex-col justify-center w-full border-b-[3px] border-gray-300 py-1 p-[10px]">
                <h1 className="text-md font-bold w-full truncate">
                    {data?.info?.title} {data?.version}
                </h1>
                <h5 className="text-xs font-semibold w-full truncate">
                    ({data?.info?.description})
                </h5>
            </div>

            <ul className="w-full h-[calc(100%_-_51px)] py-1 overflow-y-auto overflow-x-hidden">
                {navItems?.map(item => (
                    <li
                        key={item.key}
                        className={
                            `py-2 px-5 font-medium text-gray-600 text-sm truncate hover:bg-gray-200 hover:cursor-pointer ${resourceKey === item.data.type && " bg-gray-300"}`}
                        title={item.key}
                        onClick={() => navigateDetail(item.data.type)}
                    >
                        {item.key}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
