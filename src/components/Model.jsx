import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Model = ({ onClosed, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 backdrop-blur h-screen z-40 w-screen grid place-items-center">
          <div 
          className="m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClosed}
                className="text-2xl self-end"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  ,document.getElementById("model-root")  );
};

export default Model;
