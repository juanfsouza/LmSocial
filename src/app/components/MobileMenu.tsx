"use client"
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=''>
            <div 
                className='flex flex-col gap-[4.5px] cursor-pointer' 
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className='w-6 h-1 bg-blue-500 rounded-sm' />
                <div className='w-6 h-1 bg-blue-500 rounded-sm' />
                <div className='w-6 h-1 bg-blue-500 rounded-sm' />
            </div>
        </div>
    )
}

export default MobileMenu;
