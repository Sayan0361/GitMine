"use client";

import { signIn } from "@/lib/auth-client";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { GitBranch, ShieldCheck } from "lucide-react";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import React, { useState } from "react";
import { features, REVIEW_LINES, REVIEW_STATS } from "../constants/login-features";
import Image from "next/image";

const display = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-mono",
});

const LoginUI = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleGithubLogin = async () => {
        setIsLoading(true);

        try {
            await signIn.social({
                provider: "github",
            });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    return (
        <div
            className={`${display.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-[#08080a] font-sans text-[#f3f3f5]`}
        >
            {/* Ambient background: grid + slow-drifting gradient blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "44px 44px",
                        maskImage:
                            "radial-gradient(ellipse 90% 70% at 50% 0%, black 40%, transparent 90%)",
                    }}
                />
                <div className="blob-a absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-[#5b5fef]/16 blur-[130px]" />
                <div className="blob-b absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[#3ecf8e]/10 blur-[140px]" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#08080a]" />
            </div>

            <div className="relative grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
                {/* LEFT */}
                <div className="hidden flex-col justify-between border-r border-white/6 px-16 py-14 lg:flex xl:px-20">
                    <div>
                        {/* Logo */}
<div className="mb-14 flex items-center gap-3.5">
    <div className="flex items-center justify-center">
        <Image
            src="/GitMine-logo.svg"
            alt="GitMine Logo"
            width={180}
            height={60}
            priority
            className="h-12 w-auto"
        />
    </div>
</div>

                        {/* Eyebrow */}
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3.5 py-1.5 font-mono text-[12px] text-[#a3a7ff]">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8b90ff] opacity-60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8b90ff]" />
                            </span>
                            reviewing pull requests in real time
                        </div>

                        {/* Heading */}
                        <h2
                            className="max-w-lg text-[52px] font-semibold leading-[1.08] tracking-[-0.02em] text-white xl:text-[58px]"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Ship better code
                            <br />
                            before humans{" "}
                            <span className="bg-linear-to-r from-[#9aa0ff] to-[#5b5fef] bg-clip-text text-transparent">
                                review it.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-[15px] leading-7 text-[#9498a1]">
                            GitMine reads every pull request the moment it opens —
                            catching bugs, flagging security risk, and suggesting fixes
                            before your teammates get a notification.
                        </p>

                        {/* Features */}
                        <div className="mt-9 space-y-3">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 text-[13.5px] text-[#c2c4ca]"
                                >
                                    <span className="font-mono text-[13px] text-[#5b5fef]">
                                        {">"}
                                    </span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Review terminal */}
                        <div className="relative mt-12 max-w-lg">
                            <div className="absolute -inset-px rounded-[15px] bg-linear-to-b from-white/8 to-transparent" />
                            <div className="relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#0d0d10] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
                                {/* window chrome */}
                                <div className="flex items-center justify-between border-b border-white/6 bg-white/1.5 px-4 py-2.5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3f]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3f]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#3a3a3f]" />
                                        </div>
                                        <span className="font-mono text-[12px] text-[#75787f]">
                                            auth/permissions.ts
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 rounded-full border border-[#5b5fef]/25 bg-[#5b5fef]/10 px-2.5 py-1 font-mono text-[10.5px] text-[#a3a7ff]">
                                        <span className="h-1 w-1 rounded-full bg-[#a3a7ff]" />
                                        AI review
                                    </div>
                                </div>

                                {/* code lines */}
                                <div className="font-mono text-[12.5px] leading-[1.9]">
                                    {REVIEW_LINES.map((line, i) => (
                                        <div
                                            key={i}
                                            className={`flex px-4 ${line.type === "removed"
                                                    ? "bg-[#ff6b6b]/[0.07]"
                                                    : line.type === "added"
                                                        ? "bg-[#3ecf8e]/[0.07]"
                                                        : ""
                                                }`}
                                        >
                                            <span className="mr-4 w-4 shrink-0 select-none text-[#4a4d54]">
                                                {i + 1}
                                            </span>
                                            <span
                                                className={
                                                    line.type === "removed"
                                                        ? "text-[#ff8f8f] before:mr-2 before:text-[#ff6b6b]/70 before:content-['−']"
                                                        : line.type === "added"
                                                            ? "text-[#7fe3b4] before:mr-2 before:text-[#3ecf8e]/80 before:content-['+']"
                                                            : line.type === "comment"
                                                                ? "pl-3 text-[#63666d]"
                                                                : "pl-3 text-[#b7bac1]"
                                                }
                                            >
                                                {line.text}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="scanline pointer-events-none" />
                                </div>

                                {/* stat chips */}
                                <div className="flex flex-wrap gap-2 border-t border-white/6 bg-white/1.5 px-4 py-3">
                                    {REVIEW_STATS.map((stat) => (
                                        <span
                                            key={stat.label}
                                            className={`rounded-md border px-2 py-1 font-mono text-[10.5px] ${stat.tone === "add"
                                                    ? "border-[#3ecf8e]/20 bg-[#3ecf8e]/6 text-[#7fe3b4]"
                                                    : stat.tone === "ready"
                                                        ? "border-[#5b5fef]/25 bg-[#5b5fef]/8text-[#a3a7ff]"
                                                        : "border-white/10 bg-white/3 text-[#9498a1]"
                                                }`}
                                        >
                                            {stat.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="font-mono text-[11.5px] text-[#5c5f66]">
                        trusted by teams reviewing thousands of pull requests / day
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex items-center justify-center px-6 py-14 sm:px-10">
                    <div className="relative w-full max-w-[400px]">
                        <div className="absolute -inset-px rounded-[22px] bg-linear-to-b from-white/[0.14] via-white/4 to-transparent" />
                        <div className="relative rounded-[21px] border border-white/[0.07] bg-white/3 p-8 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:p-10">
                            {/* Mobile logo */}
                            <div className="mb-9 flex items-center gap-3 lg:hidden">
                                <div className="flex h-10 w-10 items-center justify-center rounded-[9px] border border-white/10 bg-white/4">
                                    <GitBranch size={18} className="text-[#8b90ff]" />
                                </div>
                                <div>
                                    <h2
                                        className="text-[15px] font-semibold"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        GitMine
                                    </h2>
                                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#6d7178]">
                                        AI Code Review
                                    </p>
                                </div>
                            </div>

                            <div className="mb-9">
                                <h2
                                    className="text-[27px] font-semibold tracking-[-0.01em] text-white"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    Welcome back
                                </h2>
                                <p className="mt-2 text-[14px] leading-6 text-[#9498a1]">
                                    Sign in with GitHub to keep reviewing your
                                    repositories.
                                </p>
                            </div>

                            {/* GitHub button */}
                            <button
                                onClick={handleGithubLogin}
                                disabled={isLoading}
                                className="github-btn group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-white/8 bg-[#141416] px-5 py-3.5 text-[14.5px] font-medium text-white transition-all duration-300 hover:border-white/[0.14] hover:bg-[#18181b] disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
                                <span className="shine pointer-events-none absolute inset-0" />
                                <GithubLogoIcon
                                    size={19}
                                    weight="fill"
                                    className="relative"
                                />
                                <span className="relative">
                                    {isLoading ? "Connecting…" : "Continue with GitHub"}
                                </span>
                            </button>

                            <div className="my-7 flex items-center gap-3">
                                <div className="h-px flex-1 bg-white/[0.07]" />
                                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#5c5f66]">
                                    secure auth
                                </span>
                                <div className="h-px flex-1 bg-white/[0.07]" />
                            </div>

                            <div className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4">
                                <ShieldCheck
                                    size={19}
                                    className="mt-0.5 shrink-0 text-[#8b90ff]"
                                />
                                <div>
                                    <h3 className="text-[13.5px] font-medium text-[#e4e4e7]">
                                        Your repositories stay private
                                    </h3>
                                    <p className="mt-0.5 text-[12.5px] leading-5 text-[#8b8e96]">
                                        GitMine only analyzes code you've explicitly
                                        granted access to.
                                    </p>
                                </div>
                            </div>

                            <p className="mt-7 text-center text-[12px] leading-5 text-[#6d7178]">
                                By continuing you agree to our{" "}
                                <span className="cursor-pointer text-[#a3a7ff] hover:underline">
                                    Terms
                                </span>{" "}
                                and{" "}
                                <span className="cursor-pointer text-[#a3a7ff] hover:underline">
                                    Privacy Policy
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .blob-a {
                    animation: drift-a 22s ease-in-out infinite alternate;
                }
                .blob-b {
                    animation: drift-b 26s ease-in-out infinite alternate;
                }
                @keyframes drift-a {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        transform: translate(40px, 30px) scale(1.08);
                    }
                }
                @keyframes drift-b {
                    0% {
                        transform: translate(0, 0) scale(1);
                    }
                    100% {
                        transform: translate(-30px, -25px) scale(1.05);
                    }
                }
                .scanline {
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 40%;
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgba(139, 144, 255, 0.05),
                        transparent
                    );
                    animation: scan 5s ease-in-out infinite;
                }
                @keyframes scan {
                    0% {
                        top: -40%;
                    }
                    100% {
                        top: 100%;
                    }
                }
                .github-btn .shine {
                    background: linear-gradient(
                        100deg,
                        transparent 30%,
                        rgba(255, 255, 255, 0.08) 50%,
                        transparent 70%
                    );
                    transform: translateX(-120%);
                }
                .github-btn:hover .shine {
                    transform: translateX(120%);
                    transition: transform 0.9s ease;
                }

                @media (prefers-reduced-motion: reduce) {
                    .blob-a,
                    .blob-b,
                    .scanline {
                        animation: none;
                    }
                    .github-btn:hover .shine {
                        transition: none;
                        transform: translateX(-120%);
                    }
                }
            `}</style>
        </div>
    );
};

export default LoginUI;