import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MH_Second_Units = () => {
  return (
    <>
      <div className="md:flex justify-center items-center">
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>1.文字式とは？</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild disabled>
              <Link href="/system/student/study/system/math/second/u1">
                学習する
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
};

export default MH_Second_Units;
