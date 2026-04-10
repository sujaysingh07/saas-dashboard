import { Check, Eye, Star } from "lucide-react";
import { ModeToggle } from "./ui/mode-toggle";

import {
  IconBrandApple,
  IconBrandAppleFilled,
  IconBrandGoogle,
  IconBrandMeta,
} from "@tabler/icons-react";
import Logo from "./shared/Logo";
import Link from "next/link";
export function Signup() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Logo */}
      <Logo />

      <div className="relative z-10 flex w-full">
        {/* Theme Toggle */}
        <div className="absolute top-5 right-5">
          <ModeToggle />
        </div>

        {/* ================= LEFT SIDE ================= */}
        <div className="hidden lg:flex flex-col justify-center px-16 w-1/2 text-foreground">
          <h1 className="text-4xl font-semibold leading-tight mb-6">
            Expert level Cybersecurity <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>
          <div className="space-y-4 text-sm text-muted-foreground mb-10">
            <h2>What&apos;s Include</h2>
            <div className="flex flex-col gap-4 max-w-102">
              <div className="flex gap-2 ">
                <Check size={18} /> Effortlessly spider and map targets to
                uncover hidden security flaws
              </div>
              <div className="flex gap-2 ">
                <Check size={18} /> Deliver high-quality, validated findings in
                hours, not weeks.
              </div>
              <div className="flex gap-2 ">
                <Check size={18} /> Generate professional, enterprise-grade
                security reports automatically.
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground relative">
            <div className="flex gap-1 items-center mb-1">
              <Star size={14} color="#04da8d" /> Trustpilot <br />
            </div>
            <span className="flex text-foreground font-medium relative">
              Rated 4.5/5.0
              <div className="text-muted-foreground text-[10px] absolute bottom-1 flex left-22">
                <p>(100k+ reviews)</p>
              </div>
            </span>{" "}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center justify-center w-full lg:w-1/2 p-6">
          <div className="bg-card text-card-foreground rounded-3xl shadow-xl w-full max-w-97.5 p-8 border border-border">
            <h2 className="text-2xl font-semibold text-center mb-2">Sign up</h2>

            <p className="text-sm text-center text-muted-foreground mb-6">
              Already have an account?{" "}
              <Link href="#" className="text-primary font-medium underline">
                Log in
              </Link>
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-full bg-input border border-border rounded-[8px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <input
                type="text"
                placeholder="Last name*"
                className="w-full bg-input border border-border rounded-[8px] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <input
                type="email"
                placeholder="Email address*"
                className="w-full bg-input border border-border rounded-[8px]  px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <div className="relative">
                <input
                  type="password"
                  placeholder="Password (8+ characters)*"
                  className="w-full bg-input border border-border rounded-[8px] px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Eye className="absolute right-3 top-3.5 w-4 h-4 text-muted-foreground cursor-pointer" />
              </div>

              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="mt-1 accent-primary" />
                <p>
                  I agree to Aps’s{" "}
                  <Link href="#" className="text-blue-700 underline">
                    Terms & Conditions
                  </Link>{" "}
                  and acknowledge the{" "}
                  <Link href="#" className="text-blue-700 underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Create account
              </button>
            </form>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-black text-white py-2.5 rounded-full transition hover:opacity-90"
              >
                <IconBrandAppleFilled size={20} stroke={1.8} />
              </button>

              {/* Google */}
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-[#EDEBE9] text-black py-2.5 rounded-full transition hover:opacity-90"
              >
                <IconBrandGoogle size={20} stroke={1.8} />
              </button>

              {/* Meta */}
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-[#3B82F6] text-white py-2.5 rounded-full transition hover:opacity-90"
              >
                <IconBrandMeta size={20} stroke={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
