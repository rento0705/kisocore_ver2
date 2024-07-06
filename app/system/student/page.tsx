"use client";
import { auth, db } from "@/app/firebase";
import { Student_Navbar } from "@/components/component/student_navbar";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import Subjects from "@/components/component/Subjects";

const Page = () => {
  const [user] = useAuthState(auth);
  async () => {
    if (!user) {
      redirect("/system/student/login");
    }
  };

  if (user) {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">ようこそ、{user?.displayName}さん</h1>
        </div>
        <p className="flex justify-center text-3xl">基礎を学びましょう。</p>
        <br />
        <br />
        <p className="flex justify-center text-2xl">
          履修する科目を選択してください。
        </p>
        <div className="md:flex justify-center items-center">
          <Subjects />
        </div>
      </>
    );
  } else {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>403 Forbidden</AlertTitle>
        <AlertDescription>
          アクセスが拒否されました。 ログインしてください。
        </AlertDescription>
        <br />
        <Button asChild>
          <Link href="/system/student/login">ログインする</Link>
        </Button>
      </Alert>
    );
  }
};

export default Page;
