import React, {useState} from 'react';
import AddIcon from "../Icons/Add/AddIcon";
import Modal from "../Modal/Modal";
import ServiceForm from "../Form/ServiceForm";
import {ServiceInterface, generateRandomString} from "../../utils";

const NewService = ({newService}: { newService: (data: ServiceInterface) => void }) => {
    const [modalShow, setModalShow] = useState(false)
    const modalChange = () => {
        setModalShow((prevState) => !prevState)
    }

    const onFormSave = (data: ServiceInterface) => {
        newService({...data, id:data?.id || generateRandomString()});
        modalChange();
    }
    return (
        <>
            <button
                data-modal-target="defaultModal"
                data-modal-toggle="defaultModal"
                type="button"
                className="
                            flex
                            items-center
                            text-gray-500
                            bg-gray-100
                            font-medium
                            rounded-lg
                            text-sm
                            px-2 py-2.5 mx-3
                            hover:bg-gray-500
                            hover:text-white
                        "
                onClick={() => modalChange()}
            >
                <AddIcon/>
                New Service
            </button>

            {modalShow &&
                <Modal
                    title={"New Service"}
                    closeFunction={modalChange}
                    bodyChildren={<ServiceForm onSubmit={(e) => onFormSave(e)}/>}
                    footerChildren={
                        <>
                            <button
                                form="serviceForm" type="submit"
                                className="
                                    text-white bg-blue-700
                                    hover:bg-blue-800 focus:ring-4
                                    focus:outline-none focus:ring-blue-300
                                    font-medium rounded-lg text-sm
                                    px-5 py-2.5 text-center"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => modalChange()}
                                type="button"
                                className="
                                    text-gray-500 bg-white
                                    hover:bg-gray-100 focus:ring-4
                                    focus:outline-none focus:ring-blue-300
                                    rounded-lg border border-gray-200
                                    text-sm font-medium px-5 py-2.5
                                    hover:text-gray-900 focus:z-10"
                            >
                                Close
                            </button>
                        </>
                    }
                />}
        </>
    );
};

export default NewService;
