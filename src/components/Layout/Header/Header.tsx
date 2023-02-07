import React, {useEffect, useState} from 'react';
import NewService from "../../NewService/NewService";
import {getServicesFromLocalStorage, ServiceInterface} from "../../../utils";
import CloseIcon from "../../Icons/Close/CloseIcon";

const Header = () => {
    const [services, setServices] = useState<ServiceInterface[]>(getServicesFromLocalStorage())
    const [selectedService, setSelectedService] = useState<ServiceInterface | undefined>()


    useEffect(() => {
        const locations = window.location.pathname.split('/');
        locations.shift();
        if (locations.length) {
            setSelectedService(services?.find(service=> service.id === locations[0]))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('services', JSON.stringify(services));
    }, [services])

    const addNewService = (data: ServiceInterface) => {
        setServices((prevState) => [...prevState, data])
    }

    const removeService = (id?: string) => {
        const serviceData = [...services];
        const selectedIndex= serviceData.findIndex(service=> service.id === id)
        if(selectedIndex !== -1) {
            serviceData.splice(selectedIndex, 1)
            setServices([...serviceData])
        }
    }

    return (
        <div className="layout-border-bottom flex h-[60px] items-center">
            <div className="w-[250px] h-full flex justify-center layout-border-right py-1.5">
                {/*<h3 className="font-semibold mx-1">*/}
                {/*    Opra Client Doc.*/}
                {/*</h3>*/}
                <NewService newService={(e) => addNewService(e)}/>
            </div>
            {/* Service List */}
            <ul className="flex h-full text-sm font-medium text-center capitalize mx-2">
                {services?.map((service) =>
                    <li className="flex" key={service.id}>
                        <a href={`/${service.id}`} aria-current="page"
                           className={`w-[150px] flex header-button ${service.id === selectedService?.id && 'header-button-active'}`}
                        >
                        <span className="truncate w-full">
                            {service?.name}
                        </span>

                        </a>

                        {service.id !== selectedService?.id &&
                            <button type="button"
                                    className="
                                    absolute text-gray-400 bg-transparent
                                    hover:bg-gray-400 hover:text-gray-800 hover:opacity-50 rounded-lg text-sm mt-3 ml-[130px]"
                                    onClick={() => {
                                        removeService(service?.id)
                                    }}
                            >
                                <CloseIcon/>
                                <span className="sr-only">Close modal</span>
                            </button>}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Header;
