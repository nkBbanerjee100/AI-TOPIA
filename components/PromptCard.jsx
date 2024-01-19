"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "@clerk/clerk-react";
import { usePathname, useRouter } from "next/navigation"
const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const pathName = usePathname();
    const { session } = useSession();
    const [like, setLike] = useState(false);
    const router = useRouter();
    const [copied, setCopied] = useState("");
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => { setCopied("") }, 1000);
    }
    const likeHandler = () => {

    }
    // useEffect(() => {
    //     console.log(post);
    // }, [])
    return (
        <>
            {pathName === '/profile' ?
                post.firstName === session.user.firstName ?
                    (<div className="prompt_card">
                        <div className="flex justify-between items-start gap-5">
                            <div className="flex-1 flex justify-start items-center gap-3 cursor-poiner">
                                <div className="flex flex-col">
                                    <h4 className="font-satoshi font-semibold text-grey-900 cursor-pointer" onClick={() => { console.log(session?.user?.firstName); router.push(`/profile/${post.firstName.replace(" ", "")}`) }}>
                                        {post.firstName}
                                    </h4>
                                    <p className="font-inter text-sm text-grey-500">{post.lastName}</p>
                                </div>
                            </div>
                            <div className="copy_btn" onClick={handleCopy}>
                                <Image src={copied === (post.promt) ? "assets/icons/ticking.svg" : 'assets/icons/copy.svg'} alt={copied === (post.prompt) ? "tick_icon" : "copy_icon"} width={12} height={12} />

                            </div>
                        </div>
                        <p className="my-4 font-satoshi text-grey-700">{post.prompt}</p>
                        <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
                        {post.firstName === session.user.firstName && pathName === '/profile' && (
                            <div className="mt-5 flex-center gap-4 border-t border-grey-100 pt-3">
                                <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
                                    Edit
                                </p>
                                <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
                                    Delete
                                </p>
                                {/*
                                <div className="text-grey-500 blue_gradient" onClick={() => setLike((prev) => !prev)}>{like ? "Like" : "NOt Like"}</div> */}

                            </div>
                        )}
                    </div>) : <></>
                : <div className="prompt_card">
                    <div className="flex justify-between items-start gap-5">
                        <div className="flex-1 flex justify-start items-center gap-3 cursor-poiner">
                            <div className="flex flex-col">
                                <h4 className="font-satoshi font-semibold text-grey-900 cursor-pointer" onClick={() => { console.log(session?.user?.firstName); router.push(`/profile/${post.firstName.replace(" ", "")}`) }}>
                                    {post.firstName}
                                </h4>
                                <p className="font-inter text-sm text-grey-500">{post.lastName}</p>
                            </div>
                        </div>
                        <div className="copy_btn" onClick={handleCopy}>
                            <Image src={copied === (post.promt) ? "assets/icons/ticking.svg" : 'assets/icons/copy.svg'} alt={copied === (post.prompt) ? "tick_icon" : "copy_icon"} width={12} height={12} />

                        </div>
                    </div>
                    <p className="my-4 font-satoshi text-grey-700">{post.prompt}</p>
                    <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
                    {post.firstName === session?.user?.firstName && pathName === '/profile' && (
                        <div className="mt-5 flex-center gap-4 border-t border-grey-100 pt-3">
                            <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
                                Edit
                            </p>
                            <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
                                Delete
                            </p>
                            {/* <div className="text-grey-500 blue_gradient">Like</div> */}
                        </div>

                    )}
                </div>}
        </>
    )
}

export default PromptCard
