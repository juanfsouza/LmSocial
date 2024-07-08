import React from 'react';
import Image from 'next/image';
import { Comments } from './Comments';

export const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* USER */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image 
            src="https://images.pexels.com/photos/4239547/pexels-photo-4239547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack</span>
        </div>
        <Image src="/more.png" width={16} height={16} alt='' />
      </div>
      {/* DESC */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image 
            src="https://images.pexels.com/photos/9633530/pexels-photo-9633530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            fill={true}
            className='object-cover rounded-md'
            alt=""
          />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the 
          industry&apos;s standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book.
        </p>
      </div>
      {/* INTERACTION */}
      <div className='flex items-center justify-between text-sm my-4'>
        <div className='flex gap-8'>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image 
              src="/like.png" 
              width={16} 
              height={16} 
              alt=''
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              123<span className='hidden md:inline'> Likes</span>
            </span>
          </div>
          <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
            <Image 
              src="/comment.png" 
              width={16} 
              height={16} 
              alt=''
              className='cursor-pointer'
            />
            <span className='text-gray-300'>|</span>
            <span className='text-gray-500'>
              123<span className='hidden md:inline'> Comments</span>
            </span>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
          <Image 
            src="/share.png" 
            width={16} 
            height={16} 
            alt=''
            className='cursor-pointer'
          />
          <span className='text-gray-300'>|</span>
          <span className='text-gray-500'>
            123<span className='hidden md:inline'> Shares</span>
          </span>
        </div>
      </div>
      <Comments />
    </div>
  );
};
