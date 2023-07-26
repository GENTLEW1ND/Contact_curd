import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({contact}) => {
  return (
    <div>
      <div
        key={contact.id}
        className="bg-yellow flex justify-around items-center p-2 rounded-lg"
      >
        <div className="flex gap-1">
          <HiOutlineUserCircle className="text-4xl text-orange" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
