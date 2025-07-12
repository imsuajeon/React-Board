import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
  return (
    <div className="page">
      <div className="container mt-50">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-lg">로그인</CardTitle>
            <CardDescription>
              로그인을 휘한 정보를 입력해주세요<div className=""></div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 mb-4">
              <Button
                variant="outline"
                className="w-full !bg-green-500 text-black">
                <img src="./src/naver.svg" alt="" className="w-4 h-4" />
                네이버 로그인
              </Button>
              <Button
                variant="outline"
                className="w-full !bg-amber-300 text-black">
                <img src="./src/kakao.svg" alt="" className="w-4 h-4" />
                카카오 로그인
              </Button>
              <Button variant="outline" className="w-full">
                <img
                  src="src/assets/icons/google.svg"
                  alt=""
                  className="w-4 h-4"
                />
                구글 로그인
              </Button>
            </div>
            <div className="text-neutral-600 text-sm text-center mb-4">
              ━━━━━━ OR CONTINUE WITH ━━━━━━
            </div>
            <form>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="이메일을 입력하세요."
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">비밀번호</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 underline">
                      비밀번호를 잊으셨나요?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    placeholder="비밀번호를 입력하세요"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              className="w-full bg-red-400 text-white font-bold">
              로그인
            </Button>

            <div className="flex justify-center items-center gap-1 mt-2 text-sm text-gray-400">
              <span>계정이 없으신가요?</span>
              <a href="/signup" className="underline">
                회원가입
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
