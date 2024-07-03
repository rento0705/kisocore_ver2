"use client"
import { auth, provider} from "@/app/firebase"
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth"
import { redirect } from 'next/navigation'
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { useRouter } from "next/navigation";



const Login = () => {
  return (
    <>
    <Toaster />
    <div className='flex justify-center'><SignInButton /></div>
    <br />
    <p className="flex justify-center">※ログインできない場合は開発チームに連絡してください。</p>
    <p className="flex justify-center">このサービスにログインすると<a href="/terms-pp" className="text-blue-500">利用規約およびプライバイシーポリシー</a>に同意したものとします。</p>
    </>
  )
}

//グーグルボタンでサインイン
function SignInButton(){
    const router = useRouter();
    const signInWithGoogle = async () => {
      try{
        await signInWithPopup(auth, provider)
        await toast("ログインに成功しました")
        await router.push("/system/student/")
      }catch (err){
        alert("Authエラー:\n" + err)
        console.log(err)
      }
    };

  return (
    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={signInWithGoogle}><p>Googleでサインイン</p></button>
  )
}


export default Login