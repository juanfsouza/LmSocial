// pages/settings.tsx

import { Feed } from '@/app/components/Feed';
import { LeftMenu } from '@/app/components/LeftMenu';
import { RightMenu } from '@/app/components/RightMenu';
import React from 'react';
import Image from 'next/image';
import prisma from '@/app/lib/client';

const ProfilePage = async ({ params }: { params: {username: string } }) => {
  const username = params.username;

  const user = await prisma.user.findFirst({
    where: {
      username,
    },
    include: {
      _count:{
        select:{
          followers:true,
          followings:true,
          posts:true,
        }
      }
    }
  });
    return (
        <div className='flex gap-6 pt-6'>
        <div className="hidden xl:block w-[20%]">
          <LeftMenu type='profile'/>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className='flex flex-col items-center justify-center'>
              <div className='w-full h-64 relative'>
                <Image 
                  src="https://images.pexels.com/photos/19068966/pexels-photo-19068966/free-photo-of-mao-verao-bebida-drink.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                  alt="" 
                  fill 
                  className="rounded-md object-cover"
                />
                <Image src="https://images.pexels.com/photos/18775833/pexels-photo-18775833/free-photo-of-tijolos-ladrilhos-parede-muro.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                  alt=''
                  width={128}
                  height={128}
                  className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover'
                />
              </div>
              <h1 className="mt-20 mb-4 text-2xl font-medium">Elva Weaver</h1>
              <div className="flex items-center justify-center gap-12 mb-4">
                <div className="flex flex-col items-center">
                  <span className="font-medium">90</span>
                  <span className="text-sm">Posts</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">13k</span>
                  <span className="text-sm">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-medium">5k</span>
                  <span className="text-sm">Following</span>
                </div>
              </div>
            </div>
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu userId='test' />
        </div>
      </div>
    );
};

export default ProfilePage;
