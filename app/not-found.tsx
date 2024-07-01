import Product_navbar from "@/components/component/product_navbar";
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"


export default function NotFound() {
    return(
        <>
        <Product_navbar />
        <div className="flex justify-center items-center">
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                    <AlertTitle>404 Not Found</AlertTitle>
                    <AlertDescription>
                    ページが見つかりませんでした。
                    </AlertDescription>
            </Alert>
        </div>
        </>
    )
  }