import Login from '@/components/component/Login'
import React from 'react'

const page = () => {
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

export default page