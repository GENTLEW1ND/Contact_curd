import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const contactsSnappshot = await getDocs(contactsRef);
        const contactLists = contactsSnappshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-3xl absolute ml-1" />
          <input
            type="text"
            className="border bg-transparent border-white rounded-md h-10 flex-grow text-white pl-9"
          />
        </div>
        <AiFillPlusCircle className="text-5xl text-white gap-2 cursor-pointer" />
      </div>
      <div className="mt-4">
        {contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
  );
};

export default App;
