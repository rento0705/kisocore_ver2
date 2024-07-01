import { OP_Navbar } from '@/components/component/op_navbar'
import { Team_Member } from '@/components/component/team_member'
import React from 'react'
import { Link } from 'lucide-react';

const index = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <OP_Navbar />
        <h1 className='text-4xl'>KisoCore 運営チーム</h1>            

        <br /><br />
        <p className='text-2xl underline text-bold text-red-500'>みなさんが基礎を理解するために、我々は全力を尽くしています。</p>
        <br />
        {/* <div className="max-w-sm rounded overflow-hidden shadow-lg w-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">なぜこのようなサービスが必要なのか？</div>
          <p className="text-gray-700 text-base">
          これは私が友人の塾で使っているウェブ学習サービスから影響を受けたものです。
          その友人は英語でわからないことがあるから、私にウェブ教材を代わりにやってくれと頼みました。
          私はそのサービスを利用したとき、なぜその友人はできないのかと考えました。
          友人はその範囲は塾の集団授業で履修済みでした。
          なぜ講義動画も用意されているのにわからないのか。
          それは、基礎がなってないからだと思いました。
          この世の中には基礎+応用のサービスがたくさん存在し、塾やその友達が使っているサービスもそうでした。
          ですが、基礎を固めることだけができるサービスはないと思ったのです。
          そこで、このKisoCoreからは応用を一切排除し「基礎」を超固めるということに重点を置きました。
          みなさんが基礎を固め、学力向上に少しでもお力になれたらと思い、このサービスを開発しました。
          KisoCoreは、基礎がなっていない人が使い、基礎を理解し、そこから自力で応用も解けるようになる、
          そんなほぼ応用しかやらないものと真逆を提供し、基礎を固めた人が強くなる。それをお供するサービスとして、基礎を固めるシステムが必要なのです。
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <span>開発者 れんトゥール</span>
        </div>
       </div> */}
    </div>
    </>
  )
}

export default index