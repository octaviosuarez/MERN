import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children, titulo }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-[400px] bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <span className="block w-6 h-6">×</span>
                </button>
              </div>
              <div className="relative p-6">{children}</div>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      )}
    </>
  );
};

export default Modal;
