import { OP_Navbar } from '@/components/component/op_navbar'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


const index = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <OP_Navbar />
        <h1 className='text-4xl'>私達のポリシー</h1>
        <br />
        <Card>
            <CardHeader>
                <CardTitle>親身な相談</CardTitle>
            </CardHeader>
            <CardContent>
                <p>利用者がわからないところがあれば、それは我々のサービスの意義が果たされていないと我々は考えます。</p>
                <p>そのために、我々は親身になり、利用者と成績情報に応じた相談を行います。</p>
            </CardContent>
        </Card>
        <br />
        <Card>
            <CardHeader>
                <CardTitle>わかりやすい解説</CardTitle>
            </CardHeader>
            <CardContent>
                <p>客観的にわかりやすく、まとまった解説動画を作成していきます。</p>
            </CardContent>
        </Card>
        <br />
        <Card>
            <CardHeader>
                <CardTitle>基礎を固める</CardTitle>
            </CardHeader>
            <CardContent>
                <p>基礎を固めるために、私達は全力を尽くします。</p>
            </CardContent>
        </Card>
        <br /><br />
        <p>我々はこのポリシーを厳守しながら、サービスを提供していきます。</p>    
        <p>このポリシーに疑問を持った場合、お気軽にお問い合わせください！</p>
        <p>具体的にお話いたします！</p>
    </div>
    </>
  )
}

export default index