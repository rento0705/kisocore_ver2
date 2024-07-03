import { Product_navbar } from "@/components/component/product_navbar";
import { Metadata } from "next";
import Image from "next/image";

export default function Home() {

  return (
    <>
    <Product_navbar />
      <div className="flex flex-col items-center justify-center">
        <br />
        <h1 className="text-3xl">- 基礎を固め、あなたの可能性を引き出す -</h1>
        <p className="text-xl">KisoCoreは、基礎が理解できず、また、基礎が理解できても、それを実践していないという人向けのサービスです。</p>
      </div>
      <br /><br />

      <div id="about_kisocore" className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">KisoCoreとは</h1>
        <p>KisoCoreとは、基礎が理解できず、また、基礎が理解できても、それを実践していないという人向けのサービスです。</p>
        <p>基礎は、すべての勉強につながる要素です。</p>
        <p>そんな基礎が理解できず、また理解できていても、それが使えなければ意味がありません。</p>
        <p className="underline text-red-500">そのため、このサービスからは一切の応用を排除し、完全に基礎学習特化型にしました。</p>
        <p>前身となるKisoCore for All Usersは、学習機能をほぼ持たない、シンプルなアプリケーションでした。</p>
        <p>このVer2を開発することにより、さらなる基礎を学ぶためにサービスが進化しました。</p>
      </div>
    </>
  );
}
