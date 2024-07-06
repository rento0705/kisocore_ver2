import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

const Subjects = () => {
  return (
    <>
      <div className="md:flex justify-center items-center">
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>中学国語</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/system/student/subjects/japanese">
                単元リストに進む
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-red-500">備考:現在準備中</p>
          </CardFooter>
        </Card>
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>中学数学</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/system/student/subjects/math">単元リストに進む</Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>中学社会</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/system/student/subjects/ss">単元リストに進む</Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-red-500">備考:現在準備中</p>
          </CardFooter>
        </Card>
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>中学理科</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/system/student/subjects/science">
                単元リストに進む
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
        <Card className="flexw-[350px]">
          <CardHeader>
            <CardTitle>中学英語</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/system/student/subjects/english">
                単元リストに進む
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <p>備考:一部実装中</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Subjects;
