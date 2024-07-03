"use client"
import { auth } from '@/app/firebase';
import Login from '@/components/component/Login'
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';

const Page = () => {

  const [user] = useAuthState(auth);

  if (user){
    return (
      <>
      <br />
      <div className='flex justify-center items-center gap-5'>
          <img src="/logo.ico" className="flex justify-center items-center" width={150} height={150} />
          <h1 className='text-5xl'>KisoCore <span className='text-blue-500'>Version2</span></h1>
          <br />
      </div>
      <div className='flex justify-center items-center'>
          <h1 className='text-3xl text-orange-500'>for Student</h1>
      </div>
      <br />
      <Login />
      <div className='flex justify-center'>
      <p className='flex justify-center items-center text-red-500'>※あなたはすでにログイン済みです。</p>
      <a href='/system/student' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>マイページへ移動</a>
      </div>
      <br />      
      <br /><br /><br />
      <p className='flex justify-center items-center text-gray-300'>Copyright © 2024 KisoCore Version2. All rights reserved.</p>
      </>
    )
  }else{
    return (
      <>
      <br />
      <div className='flex justify-center items-center gap-5'>
          <img src="/logo.ico" className="flex justify-center items-center" width={150} height={150} />
          <h1 className='text-5xl'>KisoCore <span className='text-blue-500'>Version2</span></h1>
          <br />
      </div>
      <div className='flex justify-center items-center'>
          <h1 className='text-3xl text-orange-500'>for Student</h1>
      </div>
      <br />
      <Login />
      <br /><br /><br />
      <p className='flex justify-center items-center text-gray-300'>Copyright © 2024 KisoCore Version2. All rights reserved.</p>
      </>
    )
  }

  
}

export default Page