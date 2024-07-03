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
import { redirect, useRouter } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

const Page = ({ params }: { params: { id: string } }) => {
  const [user] = useAuthState(auth)
  async () => {
    if(!user){
      redirect("/system/student/login")
    }
  }
 

  if(params.id == "japanese"){
    return (
      <>
      <Student_Navbar />
      <div className='flex justify-center'>
      <h1 className='text-3xl'>中学国語</h1>
      </div>
      <p className='flex justify-center text-3xl'>学年を選択してください。</p>
      <br />
      <div className='md:flex justify-center items-center'>
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学1年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/japanese/first">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学2年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/japanese/second">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学3年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/japanese/third">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }
  else if(params.id == "math"){
    return (
      <>
      <Student_Navbar />
      <div className='flex justify-center'>
      <h1 className='text-3xl'>中学数学</h1>
      </div>
      <p className='flex justify-center text-3xl'>学年を選択してください。</p>
      <br />
      <div className='md:flex justify-center items-center'>
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学1年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/math/first">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学2年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/math/second">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学3年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/math/third">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }
  else if(params.id == "ss"){
    return (
      <>
      <Student_Navbar />
      <div className='flex justify-center'>
      <h1 className='text-3xl'>中学社会</h1>
      </div>
      <p className='flex justify-center text-3xl'>学年を選択してください。</p>
      <br />
      <div className='md:flex justify-center items-center'>
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学1年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/ss/first">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学2年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/ss/second">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学3年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/ss/third">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }
  else if(params.id == "science"){
    return (
      <>
      <Student_Navbar />
      <div className='flex justify-center'>
      <h1 className='text-3xl'>中学理科</h1>
      </div>
      <p className='flex justify-center text-3xl'>学年を選択してください。</p>
      <br />
      <div className='md:flex justify-center items-center'>
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学1年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/sciences/first">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学2年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/science/second">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学3年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/science/third">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }
  else if(params.id == "english"){
    return (
      <>
      <Student_Navbar />
      <div className='flex justify-center'>
      <h1 className='text-3xl'>中学英語</h1>
      </div>
      <p className='flex justify-center text-3xl'>学年を選択してください。</p>
      <br />
      <div className='md:flex justify-center items-center'>
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学1年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/english/first">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学2年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/english/second">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      <br /><br />
      <Card className='flexw-[350px]'>
        <CardHeader>
          <CardTitle>中学3年</CardTitle>
        </CardHeader>
        <CardContent>
        <Button asChild>
          <Link href="/system/student/subjects/english/third">単元リストに進む</Link>
        </Button>
        </CardContent>
        <CardFooter>
          <p className='text-red-500'>備考:現在準備中</p>
        </CardFooter>
      </Card>
      </div>
      </>
    )
  }
  else{
    return(
      <>
      <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                    <AlertTitle>システムエラー</AlertTitle>
                    <AlertDescription>
                    教科パラメーターが不正です。
                    </AlertDescription>
            </Alert>
    </>
    )
  }  
}

export default Page