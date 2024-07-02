"use client"
import { auth } from '@/app/firebase'
import { Student_Navbar } from '@/components/component/student_navbar'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {

  const [user] = useAuthState(auth)

  return (

    <>
    <Student_Navbar />
    <div className='flex justify-center'>
    <h1 className='text-3xl'>ようこそ、{user?.displayName}さん</h1>
    </div>
    <p className='flex justify-center text-3xl'>基礎を学びましょう。</p>
    <br /><br />
    <p className='flex justify-center text-2xl'>履修する科目を選択してください。</p>
    <div className='flex justify-center items-center'>
    <Card className='flexw-[350px]'>
      <CardHeader>
        <CardTitle>国語</CardTitle>
      </CardHeader>
      <CardContent>
      <Button asChild>
        <Link href="/system/student/subjects/japanese">単元リストに進む</Link>
      </Button>
      </CardContent>
      <CardFooter>
        <p>備考:現在準備中</p>
      </CardFooter>
    </Card>
    </div>
    </>
  )
}

export default page