import React from 'react'
import Image from 'next/image';

export const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* TOP */}
        <div className='flex items-center justify-between text-gray-500 font-medium'>
            <span>Sponsored Ads</span>
            <Image src='/more.png' alt='' width={16} height={16} />
        </div>
        {/* BOTTOM */}
        <div 
            className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
        >
            <div 
                className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}
            >
                <Image 
                    src='https://images.pexels.com/photos/19082533/pexels-photo-19082533/free-photo-of-voo-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
                    alt=''
                    fill
                    className='rounded-lg object-cover'
                />
            </div>
            <div className='flex items-center gap-4'>
                <Image 
                    src='https://images.pexels.com/photos/19082533/pexels-photo-19082533/free-photo-of-voo-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
                    alt=''
                    width={24}
                    height={24}
                    className='rounded-full w-6 h-6 object-cover'
                />
                <span className='text-blue-500 font-medium'>BigChef Lounge</span>
            </div>
            <p className={size === "sm" ? "text-xs" : "text-sm"}>
                {size === "sm" ? "Lorem Ipsum is simply dummy text." : size === "md" ? "Lorem Ipsum is simply dummy text." : "Lorem Ipsum is simply dummy text."}
            </p>
            <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>
                Learn more
            </button>
        </div>
    </div>
    )
};                        