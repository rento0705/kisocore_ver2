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
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const Page = () => {
  const [user] = useAuthState(auth)

  async () => {
    if(!user){
      redirect("/system/student/login")
    }
  }
  
  if (user)
    {
      return (

        <>
        <Student_Navbar />
        <div className='flex justify-center'>
        <h1 className='text-3xl'>ようこそ、{user?.displayName}さん</h1>
        </div>
        <p className='flex justify-center text-3xl'>基礎を学びましょう。</p>
        <br /><br />
        <p className='flex justify-center text-2xl'>履修する科目を選択してください。</p>
        <div className='md:flex justify-center items-center'>
        <Card className='flexw-[350px]'>
          <CardHeader>
            <CardTitle>中学国語</CardTitle>
          </CardHeader>
          <CardContent>
          <Button asChild>
            <Link href="/system/student/subjects/japanese">単元リストに進む</Link>
          </Button>
          </CardContent>
          <CardFooter>
            <p className='text-red-500'>備考:現在準備中</p>
          </CardFooter>
        </Card>
        <Card className='flexw-[350px]'>
          <CardHeader>
            <CardTitle>中学数学</CardTitle>
          </CardHeader>
          <CardContent>
          <Button asChild>
            <Link href="/system/student/subjects/math">単元リストに進む</Link>
          </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
        <Card className='flexw-[350px]'>
          <CardHeader>
            <CardTitle>中学社会</CardTitle>
          </CardHeader>
          <CardContent>
          <Button asChild>
            <Link href="/system/student/subjects/ss">単元リストに進む</Link>
          </Button>
          </CardContent>
          <CardFooter>
            <p className='text-red-500'>備考:現在準備中</p>
          </CardFooter>
        </Card>
        <Card className='flexw-[350px]'>
          <CardHeader>
            <CardTitle>中学理科</CardTitle>
          </CardHeader>
          <CardContent>
          <Button asChild>
            <Link href="/system/student/subjects/science">単元リストに進む</Link>
          </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
        <Card className='flexw-[350px]'>
          <CardHeader>
            <CardTitle>中学英語</CardTitle>
          </CardHeader>
          <CardContent>
          <Button asChild>
            <Link href="/system/student/subjects/english">単元リストに進む</Link>
          </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
        </div>

        </>
      )
    }
    else{
      return(
        <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                    <AlertTitle>403 Forbidden</AlertTitle>
                    <AlertDescription>
                    アクセスが拒否されました。
                    ログインしてください。
                    </AlertDescription>
                    <br />
                    <Button asChild>
                      <Link href="/system/student/login">ログインする</Link>
                    </Button>
            </Alert>
      )
    }
  
}

export default Page