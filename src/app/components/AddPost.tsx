"use client";
import React from 'react';
import Image from 'next/image';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


  export const AddPost = () => {
    const { userId } = useAuth();
    const router = useRouter();
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      if (!userId) return;
  
      const formData = new FormData(event.currentTarget);
      const desc = formData.get("desc");
  
      try {
        const res = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            desc,
          }),
        });
  
        if (res.ok) {
          console.log('Post created successfully');
          router.refresh(); // or router.push() if you want to navigate to another page
        } else {
          console.log('Failed to create post');
        }
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* AVATAR */}
      <Image 
        src="https://images.pexels.com/photos/25288239/pexels-photo-25288239/free-photo-of-cidade-meio-urbano-estrada-via.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
        alt="Avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className='flex-1'>
        {/* TEXT INPUT */}
        <form onSubmit={handleSubmit} className='flex gap-4'>
          <textarea 
            placeholder="What's on your mind?" 
            className='flex-1 bg-slate-100 rounded-lg p-2'
            name="desc"
            required
          />
          <Image 
            src="/emoji.png" 
            alt="Emoji"
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
          <button type="submit">Send</button>    
        </form>
        {/* TEXT OPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image 
              src="/addimage.png" 
              alt="Add Image"
              width={20}
              height={20}
            />
            Photo   
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image 
              src="/addVideo.png" 
              alt="Add Video"
              width={20}
              height={20}
            />
            Video  
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image 
              src="/addevent.png" 
              alt="Add Event"
              width={20}
              height={20}
            />
            Event  
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <Image 
              src="/poll.png" 
              alt="Poll"
              width={20}
              height={20}
            />
            Poll 
          </div>
        </div>
      </div>
    </div>
  );
};
