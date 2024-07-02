"use client"
import Student_Contact from '@/components/component/student_contact'
import { Student_Navbar } from '@/components/component/student_navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Student_Navbar />
    <div className='flex justify-center items-center'>
        <h1 className='text-3xl'>お問い合わせフォーム</h1>
    </div>
    <p className='flex justify-center'>いたずらは行わないでください。</p>
    <br />
    <Student_Contact />
    </>
  )
}

export default page