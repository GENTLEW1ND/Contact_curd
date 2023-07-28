import React, { useState } from 'react'

const useDisclose = () => {
    const [isOpen, setIsOpen] = useState(false)

    const onOpen = ()=>{
      setIsOpen(true);
    }
    const onClosed = ()=>{
      setIsOpen(false);
    }
    return{onClosed, onOpen, isOpen}
}

export default useDisclose