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

const JP_Second_Units = () => {
  return (
    <>
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
};

export default JP_Second_Units;
