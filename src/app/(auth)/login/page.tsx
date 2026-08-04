"use client";
import { useLogin } from "@/lib/mutations";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          toast.success("Login successful!", {
            duration: 2000,
            style: {
              border: "1px solid var(--color-success)",
              color: "var(--color-success)",
            },
          });
          router.push("/overview");
        },
        onError: (error: any) => {
          console.error("Login failed:", error);
          toast.error("Login failed. Please check your credentials.", {
            duration: 2000,
            style: {
              border: "1px solid var(--color-error)",
              color: "var(--color-error)",
            },
          });
        },
      },
    );

    /* try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Parse the response if needed
        const data = await res.json();
        toast.success("Login successful!", {
          duration: 2000,
          style: {
            border: "1px solid var(--color-success)",
            color: "var(--color-success)",
          },
        });
        router.push("/overview");
      }
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <div className="h-full flex antialiased bg-background text-on-background font-body-md text-body-md min-h-screen w-full">
      {/* <!-- Split Screen Layout --> */}
      <div className="flex min-h-full w-full flex-col lg:flex-row">
        {/* <!-- Left Side: Branding/Image --> */}
        <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-between overflow-hidden bg-surface-variant p-xl">
          {/* <!-- Background Image --> */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="A highly professional and abstract architectural or financial visualization. The scene features sleek, overlapping geometric planes in varying shades of emerald green, lime, and crisp white. Soft, diffused lighting creates a sense of depth, modernism, and financial precision. The overall aesthetic is minimal, premium, and clean, fitting a high-end fintech application."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYVmVu_rJUCNWKrBo2qh6FxTCbjuMm3-LTms4hPSzmNmNXTMfws5Vi6DL4bjoFEoIqsYUJ8rUAw5aNxzj0e5THWUfnjjmAnFdCOak0k8K0MCgiFBZKBH4b1Zswm-S3MsR03T78NcS3x7t8-rwCKwvWbezC9dNLffuoF4Cu71bIV3z5FBnKKe9RE4JcudTq6LtyuZwC3F16rokDLI1QiRtwZgyfm2xfDnNC5wd07N866itTs_6Frbfy9ql9_uF3kzbV9z8ry3yJY2oI')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 mix-blend-multiply"></div>
          </div>
          {/* <!-- Branding --> */}
          <div className="relative z-10 ">
            <div className="flex items-center gap-xs">
              <span
                className="material-symbols-outlined text-primary-fixed"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance
              </span>
              <span className="font-headline-md text-headline-md text-white font-bold tracking-tight">
                Cashtrack
              </span>
            </div>
          </div>
          {/* <!-- Value Prop --> */}
          <div className="relative z-10 glass-panel p-lg rounded-xl w-full border border-white/20">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
              Master your finances with precision.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Experience the ultimate suite of tools designed for seamless
              tracking, budgeting, and financial growth.
            </p>
          </div>
        </div>
        {/* <!-- Right Side: Form --> */}
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:flex-none lg:px-20 xl:px-24 bg-surface-container-lowest">
          <div className="mx-auto w-full lg:w-96">
            {/* <!-- Mobile Branding (Hidden on Desktop) --> */}
            <div className="lg:hidden flex items-center gap-xs mb-xl">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance
              </span>
              <span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
                Cashtrack
              </span>
            </div>
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-2">
                Welcome back
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Please enter your details to sign in.
              </p>
            </div>
            <div className="mt-8">
              {/* <!-- Form --> */}
              <form
                action="#"
                className="space-y-6"
                method="POST"
                onSubmit={handleSubmit}
              >
                {/* <!-- Email --> */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-on-surface mb-1"
                    htmlFor="email"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="email"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="email"
                      name="email"
                      required={true}
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* <!-- Password --> */}
                <div className="space-y-1">
                  <label
                    className="block font-label-md text-label-md text-on-surface mb-1"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      autoComplete="current-password"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 pr-10 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="password"
                      name="password"
                      required={true}
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        id="visibility-icon"
                      >
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
                {/* <!-- Options --> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary-container/20"
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                    />
                    <label
                      className="ml-2 block font-body-md text-body-md text-on-surface-variant"
                      htmlFor="remember-me"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                {/* <!-- Submit --> */}
                <div>
                  <button
                    className="flex w-full justify-center rounded-lg bg-primary-container px-4 py-2 font-title-md text-title-md text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              {/* <!-- Divider --> */}
              <div className="mt-6">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                  >
                    <div className="w-full border-t border-outline-variant"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-surface-container-lowest px-2 font-body-md text-body-md text-on-surface-variant">
                      Or continue with
                    </span>
                  </div>
                </div>
                {/* <!-- Social Logins --> */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <a
                      className="inline-flex w-full justify-center rounded-lg border border-outline-variant bg-surface px-4 py-2 font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                      href="#"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        ></path>
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        ></path>
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        ></path>
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <a
                      className="inline-flex w-full justify-center rounded-lg border border-outline-variant bg-surface px-4 py-2 font-label-md text-label-md text-on-surface shadow-sm hover:bg-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                      href="#"
                    >
                      <span className="sr-only">Sign in with Apple</span>
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10c0-5.523-4.477-10-10-10z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Sign Up Link --> */}
              <div className="mt-6 text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Don't have an account?
                  <a
                    className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
                    href="#"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
