import React from 'react';
import Image from 'next/image';

export const ProfileCard = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
      <div className='h-20 relative'>
          <Image
            src='https://images.pexels.com/photos/26771975/pexels-photo-26771975/free-photo-of-mar-alvorecer-amanhecer-aurora.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            layout='fill'
            className='rounded-md object-cover'
          />
          <Image
            src='https://images.pexels.com/photos/11379609/pexels-photo-11379609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            width={48}
            height={48}
            className='rounded-full object-cover w-12 h-12 absolute left-[40%] m-auto -bottom-6 ring-1 ring-white z-10'
          />
      </div>
      <div className='h-20 flex flex-col gap-2 items-center'>
        <span className='font-semibold'>Edward Gabriel</span>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <Image
              src=''
              alt=''
              width={12}
              height={12}
              className='rounded-full object-cover w-3 h-3'
            />
            <Image
              src=''
              alt=''
              width={12}
              height={12}
              className='rounded-full object-cover w-3 h-3'
            />
            <Image
              src=''
              alt=''
              width={12}
              height={12}
              className='rounded-full object-cover w-3 h-3'
            />
          </div>
          <span className='text-xs text-gray-500'>500 Followers</span> 
        </div>
        <button className='bg-blue-500 text-white text-xs p-2 rounded-md'>My Profile</button>
      </div>
    </div>
  );
};
