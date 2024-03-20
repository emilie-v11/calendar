import React from 'react';
import Button from './Button';

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string | React.ReactNode;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  modalTitle,
  handleCloseModal,
}) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-md min-w-min shadow-md">
        <div className="flex justify-between items-center mb-5 space-x-4">
          <h3 className="m-0">{modalTitle}</h3>
          <Button
            text="X"
            type="button"
            addClassName="border-none bg-transparent text-lg cursor-pointer hover:scale-110 font-bold"
            onClick={handleCloseModal}
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
