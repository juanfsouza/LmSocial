import React from 'react'
import Image from 'next/image'

export const Comments = () => {
  return (
    <div>
        {/* WRITE */}
        <div className='flex items-center gap-4'>
            <Image 
                src="https://images.pexels.com/photos/16035532/pexels-photo-16035532/free-photo-of-carro-de-campismo-na-natureza-na-noruega-com-um-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={32}
                height={32}
                className='w-8 h-8 rounded-full'
            />
            <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input
                    type='text'
                    placeholder='Write a comment...'
                    className='bg-transparent outline-none'
                />
                <Image
                    src="/emoji.png"
                    alt=''
                    width={16}
                    height={16}
                    className='cursor-pointer'
                />
            </div>
        </div>
        {/* COMMENTS */}
        <div>
            {/* COMMENT */}
            <div className='flex gap-4 justify-between mt-6'>
                {/* AVATAR */}
                <Image 
                    src="https://images.pexels.com/photos/16035532/pexels-photo-16035532/free-photo-of-carro-de-campismo-na-natureza-na-noruega-com-um-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                    width={40}
                    height={40}
                    className='w-10 h-10 rounded-full'
                />
                {/* DESC */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Bernice Spencer</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                        industry&apos;s standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book.
                    </p>
                    <div className='flex items-center gap-8 text-xs text-gray-500 mt-2'>
                        <div className='flex items-center gap-4'>
                            <Image
                                src="/like.png"
                                alt=''
                                width={12}
                                height={12}
                                className='cursor-pointer w-4 h-4'
                            />
                            <span className='text-gray-300'>|</span>
                            <span className='text-gray-500'>123 Likes</span>
                        </div>
                        <div>Reply</div>
                    </div>
                </div>
                {/* ICON */}
                <Image
                    src="/more.png"
                    alt=''
                    width={16}
                    height={16}
                    className='cursor-pointer w-4 h-4'
                />
            </div>
        </div>
    </div>
  );
};
