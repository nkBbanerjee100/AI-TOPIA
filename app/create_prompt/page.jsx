"use client"
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Form from "@components/Form"
import { useSession } from "@clerk/clerk-react";

const CreatePrompt = () => {
    const { session } = useSession();
    const user = useUser();
    const router = useRouter()
    // const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        // creator: user.user.id,
        prompt: "",
        tag: ""
    })
    // const userId = user.id;
    // console.log("user->" + user.user.id);
    const CreatePromptForPage = async (e) => {
        e.preventDefault();
        setSubmitting(true)
        try {
            const response = await fetch(`/api/prompt/new`, { cache: 'no-store' }, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: session?.user?.firstName,
                    lastName: session?.user?.lastName || "",
                    prompt: post.prompt,
                    tag: post.tag
                }),

            })
            // console.log(user.user.id);
            // console.log(response.status, response.statusText);
            // console.log(response.ok);
            if ((response.ok)) {
                router.push(`/`);
            }
        } catch (error) {
            console.log("checking error " + error);
        }
        finally {
            setSubmitting(false)
        }
    }
    return (
        <div>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={CreatePromptForPage}
            />
        </div>
    )
}

export default CreatePrompt
