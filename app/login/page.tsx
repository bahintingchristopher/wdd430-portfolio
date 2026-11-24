import { LoginForm } from '@/app/components/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center bg-[#06172f] md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center justify-center rounded-lg bg-[#0b2a4a] p-3 md:h-36">
          <div className="text-center text-2xl font-bold text-white">
            PLEASE LOGIN
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
