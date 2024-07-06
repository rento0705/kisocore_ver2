"use client";
import React from "react";
import { auth } from "@/app/firebase";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { Student_Navbar } from "@/components/component/student_navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { YouTubeEmbed } from "@next/third-parties/google";

const Page = ({
  params,
}: {
  params: { subject: string; grade: string; unit_id: string };
}) => {
  const [user] = useAuthState(auth);
  async () => {
    if (!user) {
      redirect("/system/student/login");
    }
  };

  if (
    params.subject == "math" &&
    params.grade == "second" &&
    params.unit_id == "u1"
  ) {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">2年数学 1.文字式の計算</h1>
        </div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/ldJwOBVgzG0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>システムエラー</AlertTitle>
          <AlertDescription>
            教科または学年または単元IDパラメーターが不正です。
          </AlertDescription>
        </Alert>
      </>
    );
  }
};

export default Page;
