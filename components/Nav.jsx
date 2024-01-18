"use client";
import React, { useEffect, useState } from "react"
// Helps us to navigate to other pages of our website
import Link from "next/link"
// Helps us to automatically optimizes the Image
import Image from "next/image"
import { useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { useAuth } from "@clerk/nextjs";
import { useSessionList } from "@clerk/nextjs";
// import { auth } from '@clerk/nextjs';
// import "@api/auth/[...nextauth]"
const Nav = () => {
    const { isSignedIn } = useAuth();
    // const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const response = await getProviders();
                setProviders(response);

            } catch (error) {
                console.error('Error fetching providers:', error);
            }
        };
        fetchProviders();
    }, []);

    return (

        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
                <p className="logo_text ">AI-TOPIA</p>
            </Link>

            {/* {alert(providers)} */}
            {/* Mobile Navigation */}
            {/* sm:flex hidden means in smaller devices the prompts will be hidden */}
            <div >
                {isSignedIn ? (<div className="flex gap-3 md:gap-5">
                    <Link href="/create_prompt" className="black_btn">Create Post</Link>
                    {/* <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                     */}
                    <Link href="/signout" className="black_btn" >Sign Out</Link>
                    <Link href="/profile">
                        <Image src="/assets/images/logo.svg" alt="profile" width={30} height={30} className="rounded-full"></Image>
                    </Link>
                </div>) : <>
                    <Link href="/login" className="black_btn">Sign in</Link>
                </>
                }

            </div>
        </nav >
    )
}

export default Nav
