import { OP_Navbar } from '@/components/component/op_navbar'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
import { Team_Member } from '@/components/component/team_member'
import { Button } from '@/components/ui/button'
import Link from "next/link"
  


const index = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <OP_Navbar />
        <h1 className='text-4xl'>運営チーム</h1>
        <br />
        <Team_Member />
        <br />
        <p>現在の運営チームは2人で動かしています。</p>
        <p>しかしながら、私達運営チーム2人でこのサービスを支えれています。</p>
        <p>このサービスに協力してくれる方は、ぜひお気軽にお問い合わせください！</p>
        <Button asChild>
            <Link href="/team/contact">問い合わせる</Link>
        </Button>
    </div>
    </>
  )
}

export default index