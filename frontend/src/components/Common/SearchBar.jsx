import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => { 
    const [searchItem,SetsearchItem] = useState("");
    const[isOpen,SetIsOpen] = useState(false);

    const handlesearchtoggle =() =>{
        SetIsOpen(!isOpen);
    }

    const handlesearch = (e) =>{
         e.preventDefault();
         console.log("Search Item:", searchItem)
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?
        "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"} `}>
        {isOpen ? (<form className='relative flex item-center justify-center w-full' onSubmit={handlesearch}>
            <div className='relative w-1/2'>
            <input type="text" placeholder='Search'value={searchItem} onChange={(e)=>SetsearchItem(e.target.value)} className='bg-gray-100 px-4 py-2 pm-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'/>
            <button type="submit" className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMagnifyingGlass className='h-6w-6' />
            </button>
            </div>
            <button type="button" onClick={handlesearchtoggle} className='absolute right-4 top-1/2 transform-translate-y-1/2
            text-gray-600 hover:text-gray-800'>
                <HiMiniXMark className='h-6 w-6 ' />
            </button>
        </form>) : 
        (
            <button onClick={handlesearchtoggle}>
                <HiMagnifyingGlass className='h-6 w-6' />
            </button>
        )}
    </div>
  )
}

export default SearchBar