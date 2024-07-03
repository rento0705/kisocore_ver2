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
        <br />
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/japanese/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/japanese/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/japanese/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/math/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/math/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/math/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
  //社会
  else if (params.id == "ss" && params.grade == "first") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学社会 1年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/ss/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  } else if (params.id == "ss" && params.grade == "second") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学社会 2年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/ss/second">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
      </>
    );
  } else if (params.id == "ss" && params.grade == "third") {
    return (
      <>
        <Student_Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl">中学社会 3年</h1>
        </div>
        <p className="flex justify-center text-3xl">単元を選択してください。</p>
        <br />
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/ss/third">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/science/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/science/second">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/science/third">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/english/first">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/english/second">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
        </div>
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
        <div className="md:flex justify-center items-center">
          <Card className="flexw-[350px]">
            <CardHeader>
              <CardTitle>準備中</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild disabled>
                <Link href="/system/student/subjects/english/third">
                  単元リストに進む
                </Link>
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-red-500">備考:現在準備中</p>
            </CardFooter>
          </Card>
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
            教科または学年パラメーターが不正です。
          </AlertDescription>
        </Alert>
      </>
    );
  }
};

export default Page;
