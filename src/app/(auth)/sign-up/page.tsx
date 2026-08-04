"use client";
import { useSignUp } from "@/lib/mutations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const SignUpPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const signUpMutation = useSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signUpMutation.mutate(
      { email, password, firstName, lastName, phoneNumber },
      {
        onSuccess: (data) => {
          toast.success("Sign up successful!", {
            duration: 2000,
            style: {
              border: "1px solid var(--color-success)",
              color: "var(--color-success)",
            },
          });
          router.push("/overview");
        },
        onError: (error: any) => {
          console.error("Sign up failed:", error.message);
          toast.error(`Sign up failed: ${error.message}`, {
            duration: 2000,
            style: {
              border: "1px solid var(--color-error)",
              color: "var(--color-error)",
            },
          });
        },
      },
    );
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
            data-alt="An abstract, modern architectural interior shot of a sophisticated financial office. Soft, diffused daylight enters through massive windows, creating gentle gradients across pristine white surfaces and subtle emerald green accent walls. The atmosphere is professional, expansive, and high-end, utilizing the brand's minimalist aesthetic and color palette of cool grays, crisp whites, and strategic touches of deep green."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9FMLPEODHx6MG3hHAY3VPHZbF5vIqBvQQjeUKHlwQfwSJH6dYgAue0F-5IY9ptL3310RTeXe9HA9rP-BaG4RJ-wyKgKlHysWYEiGOAz9DTnh1BQEpfC9QfyQ08-9UqaaTc3nmSifVchXCPHZmV6TbN5b_LnacCE0ByLDP_Vq9T-kOO-LUxSU8yTMx83PrRgsmPqXpXwilhBBF0xPzuRK5pdHW2_Z_ccZFXQG8-2-mL_osNjwuSz3djR5dhaVzs0A0G6R7fUnlD82R')",
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
              Master your wealth.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Join thousands of professionals optimizing their financial
              trajectory with our intelligent management tools.
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
                Create an account
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Please enter your details to get started.
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
                {/* <!-- First Name --> */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-on-surface mb-1"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="firstName"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="firstName"
                      name="firstName"
                      required={true}
                      type="text"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* <!-- Last Name --> */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-on-surface mb-1"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="lastName"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="lastName"
                      name="lastName"
                      required={true}
                      type="text"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>

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
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* <!-- Last Name --> */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-on-surface mb-1"
                    htmlFor="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <input
                      autoComplete="phoneNumber"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="phoneNumber"
                      name="phoneNumber"
                      required={true}
                      type="text"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
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
                      autoComplete="password"
                      className="block w-full appearance-none rounded-lg border border-outline-variant bg-surface px-3 py-2 pr-10 text-on-surface placeholder-on-surface-variant focus:border-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container/20 sm:text-sm font-body-md text-body-md transition-shadow"
                      id="password"
                      name="password"
                      required={true}
                      type="password"
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
                {/* <!-- Terms Checkbox --> */}
                {/* <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary-container/20"
                    id="terms"
                    name="terms"
                    required={true}
                    type="checkbox"
                  />
                  <label
                    className="ml-2 block font-body-md text-body-md text-on-surface-variant"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <a
                      className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
                      href="#"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div> */}
                {/* <!-- Submit --> */}
                <div>
                  <button
                    className="flex w-full justify-center rounded-lg bg-primary-container px-4 py-2 font-title-md text-title-md text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 transition-all duration-200 hover:scale-[1.02] active:scale-95"
                    type="submit"
                  >
                    Create Account
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
                      <span className="sr-only">Sign up with Google</span>
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
                      <span className="sr-only">Sign up with Apple</span>
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
              {/* <!-- Sign In Link --> */}
              <div className="mt-6 text-center">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account?{" "}
                  <a
                    className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors"
                    href="#"
                  >
                    Sign in
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

export default SignUpPage;

