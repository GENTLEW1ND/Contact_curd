import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {FiSearch} from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import {collection} from "firebase/firestore";

const App = () => {

const [contacts, setContacts] = useState([]);

useEffect(() =>{
  const getContacts = async()=>{
    try {
      const contactsRef = collection(db, contact);
      const contactsSnappshot = await getDocs(contactsRef)
    } catch (error) {
      
    }
  }
  getContacts()
}, [])


  return <div className='mx-auto max-w-[370px] px-4'>
    <Navbar/>
   <div className='flex'>
   <div className='flex relative items-center flex-grow'>
      <FiSearch className='text-white text-3xl absolute ml-1'/>
      <input type="text" className='border bg-transparent border-white rounded-md h-10 flex-grow text-white pl-9' />
    </div>
      <AiFillPlusCircle className='text-5xl text-white gap-2 cursor-pointer'/>
   </div>
  </div>
}

export default App 