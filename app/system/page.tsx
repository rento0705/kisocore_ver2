import React from 'react'
import { AlertCircle } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert"

const page = () => {
  return (
    <div>
      <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                    <AlertTitle>403 Forbidden</AlertTitle>
                    <AlertDescription>
                    アクセスが拒否されました。
                    <p>このページにアクセスすることはできません。</p>
                    </AlertDescription>
            </Alert>
    </div>
  )
}

export default page