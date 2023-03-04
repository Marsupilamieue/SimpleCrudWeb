import React from "react";

const Modal = ({ open, onClose, onDelete }) => {
  if (!open) return null;

  const deleteUserClicked = () => {
    onDelete();
  };

  return (
    <div className="backdrop-blur-lg fixed h-[90%] w-full top-[0%] left-[0%]">
      <div className="container px-5 py-5 fixed h-[90%] w-[40%] top-[40%] left-[30%]">
        <div className="flex flex-wrap border bg-black border-blue-700 justify-center p-4 rounded-[15px] content-center">
          <p className="text-2xl text-center font-bold mb-4">
            Are you sure you want to delete this user ?
          </p>
          <div className="flex justify-center content-center">
            <button
              className="bg-blue-500 mx-2 text-white w-auto h-auto rounded-[10px] px-5 py-4 text-center font-bold border-b-4 border-blue-700"
              type="submit"
              onClick={deleteUserClicked}
            >
              Yes
            </button>
            <button
              className="bg-red-500 mx-2 text-white w-auto h-auto rounded-[10px] px-5 py-4 text-center font-bold border-b-4 border-red-700"
              type="submit"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
