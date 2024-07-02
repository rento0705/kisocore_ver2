import { OP_Navbar } from '@/components/component/op_navbar'
import { Team_Member } from '@/components/component/team_member'
import React from 'react'
import { Link } from 'lucide-react';

const index = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <OP_Navbar />
      <br />
        <p className='text-4xl text-red-500'>基本を強化し、未来を築く</p>
        <p>KisoCoreは、基礎を学び・固めるためだけに作成されたシステムです。未来を担う子どもたちに、しっかりとした基盤を提供します。</p>
        <br /><br />
        <h1 className='text-4xl text-cyan-500 underline'>我々のミッション</h1>
        <br />
        <p className='text-3xl'>基礎学力の重要性を理解させ、強固な学力の基盤を提供する</p>
        <p className='text-2xl'>我々は、基礎学力の重要性を理解させ、強固な学力の基盤を提供することをミッションにしています。</p>
        <br /><br />
        <h1 className='text-4xl text-cyan-500 underline'>ビジョン</h1>
        <br />
        <p className='text-3xl'>誰もが利用できる基礎を固めるための、質の高い教育プラットフォームを提供する</p>
        <p className='text-2xl'>すべての勉学につながる基礎。基礎を固めることにより、質の高い勉強を効率よくできると考えます。そのために、誰もが利用でき、使いやすく、質の高い教育プラットフォームを提供します。</p>
        <br /><br />
        <h1 className='text-4xl text-cyan-500 underline'>メッセージ</h1>
        <br />
        <p className='text-2xl'>基礎学習に<span className='text-blue-500'>Innovationを。</span></p>
        <br />
        <p>日々変化する教育現場。その中で変化し続けないのは<span className='underline'>応用</span>だと考えています。</p>
        <p>応用を解くためには、基礎がなっている必要があります。基礎+応用を学習するサービスなどはこの世の中にたくさん存在します。</p>
        <p>そんな中で、我々は<span>基礎</span>に重点を置きました。</p>
        <p className='text-red-500'>私達は応用を一切排除しました。</p>
        <p>基礎を強固にする学習サービスを提供し、<span className='text-2xl text-cyan-500'>自分で応用を解けるようになる。</span>そんな願いを込めて、KisoCoreを運営します。</p>
        <br />
        <p className='text-2xl'>運営チームCEO れんトゥール & 教材作成者 HN</p>
    </div>
    </>
  )
}

export default index