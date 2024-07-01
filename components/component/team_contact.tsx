"use client"
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/83NUiWKyYoL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Team_Contact() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <br />
      <CardContent>
        <form className="grid gap-4" action="https://kisocore.form.newt.so/v1/dUz4xmvoD" method="post">
          <div className="grid gap-2">
            <Label htmlFor="name">名前<span className="text-red-500">*</span></Label>
            <Input name="name" id="name" placeholder="お名前を入力してください" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">メールアドレス<span className="text-red-500">*</span></Label>
            <Input name="email" id="email" type="email" placeholder="メールアドレスを入力してください" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="line">LINE公式アカウントを持っていますか?<span className="text-red-500">*</span></Label>
            <Select name="line" id="line" required>
              <SelectTrigger>
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">はい</SelectItem>
                <SelectItem value="no">いいえ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">件名<span className="text-red-500">*</span></Label>
            <Input name="subject" id="subject" placeholder="件名を入力してください" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">本文<span className="text-red-500">*</span></Label>
            <Textarea name="message" id="message" placeholder="ご意見・ご感想を入力してください" className="min-h-[150px]" required />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox name="terms" id="terms" required />
            <Label htmlFor="terms">利用規約・プライバシーポリシーに同意する<span className="text-red-500">*</span></Label>
          </div>
          <Button type="submit" className="w-full">
            送信する
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}