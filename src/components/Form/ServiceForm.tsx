import React, {useState} from 'react';
import {ServiceInterface} from "../../utils";

const ServiceForm = (
    {onSubmit}: {
        onSubmit: (data: ServiceInterface) => void
    }
) => {
    const [formData, setFormData] = useState<ServiceInterface>({name: '', url: ''})

    return (
        <form id="serviceForm" onSubmit={() => {
            onSubmit(formData)
        }}>
            <div className="mb-6 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                </label>
                <input
                    type="text"
                    required
                    className="
                    bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block w-full p-2.5"
                    placeholder="Service Name"
                    value={formData.name}
                    onChange={e => {
                        const {value} = e.currentTarget
                        setFormData((prevState) => {
                            return {...prevState, name: value || ''}
                        })
                    }
                    }
                    onError={(e)=>{
                        console.log(e)}
                    }
                />
            </div>
            <div className="mb-6 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Api Url
                </label>
                <input
                    type="url"
                    required
                    className="
                    bg-gray-50 border border-gray-300
                    text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500
                    block w-full p-2.5"
                    placeholder="https://test.api.com"

                    value={formData.url}
                    onChange={e => {
                        const {value} = e.currentTarget
                        setFormData((prevState) => {
                            return {...prevState, url: value || ''}
                        })
                    }
                    }
                />
            </div>
        </form>
    );
};

export default ServiceForm;
