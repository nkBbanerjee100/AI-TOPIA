"use client"
import { SignOutButton } from "@clerk/clerk-react";
import Link from "next/link";
export default function Example() {
    return (
        <div>
            <Link href="/login">
                <SignOutButton></SignOutButton>
                {/* <UserProfile /> */}
            </Link>
        </div>
    );
}