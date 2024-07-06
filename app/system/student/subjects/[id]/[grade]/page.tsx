"use client";
import { auth } from "@/app/firebase";
import { Student_Navbar } from "@/components/component/student_navbar";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import JP_First_Units from "@/components/Subjects/Japanese/First/Units";
import JP_Second_Units from "@/components/Subjects/Japanese/Second/Units";
import JP_Third_Units from "@/components/Subjects/Japanese/Third/Units";
import MH_First_Units from "@/components/Subjects/Math/First/Units";
import MH_Second_Units from "@/components/Subjects/Math/Second/Units";
import MH_Third_Units from "@/components/Subjects/Math/Third/Units";
import SC_First_Units from "@/components/Subjects/Science/First/Units";
import SC_Second_Units from "@/components/Subjects/Science/Second/Units";
import SC_Third_Units from "@/components/Subjects/Science/Third/Units";
import EN_Third_Units from "@/components/Subjects/English/Third/Units";
import EN_Second_Units from "@/components/Subjects/English/Second/Units";
import EN_First_Units from "@/components/Subjects/English/First/Units";
import Tiri_Units from "@/components/Subjects/SS/Tiri/Units";
import Rekisi_Units from "@/components/Subjects/SS/Rekisi/Units";

const Page = ({ params }: { params: { grade: string; id: string } }) => {
  const [user] = useAuthState(auth);
  async () => {
    if (!user) {
      redirect("/system/student/login");
    }
  };

  //国語
  if (params.id == "japanese" && params.grade == "first") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学国語 1年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <JP_First_Units />
        <br />
      </>
    );
  } else if (params.id == "japanese" && params.grade == "second") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学国語 2年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <JP_Second_Units />
      </>
    );
  } else if (params.id == "japanese" && params.grade == "third") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学国語 3年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <JP_Third_Units />
      </>
    );
  }
  //数学
  else if (params.id == "math" && params.grade == "first") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学数学 1年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <MH_First_Units />
      </>
    );
  } else if (params.id == "math" && params.grade == "second") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学数学 2年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <MH_Second_Units />
      </>
    );
  } else if (params.id == "math" && params.grade == "third") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学数学 3年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <MH_Third_Units />
      </>
    );
  }
  //社会
  else if (params.id == "ss" && params.grade == "tiri") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学社会 地理</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <Tiri_Units />
      </>
    );
  } else if (params.id == "ss" && params.grade == "rekisi") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学社会 歴史</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <Rekisi_Units />
      </>
    );
  }
  //理科
  else if (params.id == "science" && params.grade == "first") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学理科 1年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <SC_First_Units />
      </>
    );
  } else if (params.id == "science" && params.grade == "second") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学理科 2年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <SC_Second_Units />
      </>
    );
  } else if (params.id == "science" && params.grade == "third") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学理科 3年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <SC_Third_Units />
      </>
    );
  }
  //英語
  else if (params.id == "english" && params.grade == "first") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学英語 1年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <EN_First_Units />
      </>
    );
  } else if (params.id == "english" && params.grade == "second") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学英語 2年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <EN_Second_Units />
      </>
    );
  } else if (params.id == "english" && params.grade == "third") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学英語 3年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <EN_Third_Units />
      </>
    );
  } else {
    return (
      <>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>システムエラー</AlertTitle>
          <AlertDescription>
            教科または学年パラメーターが不正です。
          </AlertDescription>
        </Alert>
      </>
    );
  }
};

export default Page;
