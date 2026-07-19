"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { signOut } from "@/lib/auth-client";

const Logout = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const router = useRouter();

    const handleLogout = () => {
        signOut(undefined, {
            onSuccess: () => {
                router.push("/login");
            },
        });
    };

    return (
        <span
            role="button"
            tabIndex={0}
            className={className}
            onClick={handleLogout}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleLogout();
                }
            }}
        >
            {children}
        </span>
    );
};

export default Logout;