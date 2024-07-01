import { OP_Navbar } from '@/components/component/op_navbar'
import Team_Contact from '@/components/component/team_contact'
import { Team_Member } from '@/components/component/team_member'
import React from 'react'



const index = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <OP_Navbar />
        <h1 className='text-4xl'>KisoCore 運営チームへ問い合わせる</h1>
        <br />    
        <Team_Contact />
    </div>
    </>
  )
}

export default index