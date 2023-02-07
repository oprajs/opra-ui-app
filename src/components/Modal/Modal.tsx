import React from 'react';
import CloseIcon from "../Icons/Close/CloseIcon";

const Modal = (
    {
        closeFunction,
        title,
        showCloseButton = true,
        bodyChildren,
        footerChildren,
        headerChildren,
    }: {
        closeFunction?: () => void,
        title?: string,
        showCloseButton?: boolean,
        bodyChildren?: JSX.Element,
        footerChildren?: JSX.Element,
        headerChildren?: JSX.Element
    }
) => {
    return (
        <>
            <div
                className="
                absolute
                bg-gray-600/50
                md:inset-0
                w-full h-modal md:h-full"

                onClick={() => {
                    closeFunction?.();
                }}
            >
            </div>
            <div
                className="absolute
                 m-auto p-4
                overflow-x-hidden
                overflow-y-auto
                top-0
                left-0 right-0 w-full h-full max-w-2xl md:h-auto z-50"
            >
                <div className="relative bg-white rounded-lg shadow">
                    {/* Modal Header */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t">
                        {headerChildren || <h3 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h3>}
                        {showCloseButton &&
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    onClick={() =>
                                        closeFunction?.()}
                            >
                                <CloseIcon/>
                                <span className="sr-only">Close modal</span>
                            </button>
                        }

                    </div>
                    {/* Modal Content */}
                    <div className="p-6 space-y-6">
                        {bodyChildren}
                    </div>

                    {/* Modal Footer */}
                    <div
                        className="flex items-center justify-end px-6 py-4 space-x-2 border-t border-gray-200 rounded-b">
                        {footerChildren ||
                            <button
                                onClick={() => closeFunction?.()}
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                            >
                                Close
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
