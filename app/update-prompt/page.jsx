"use client"
import { useUser } from "@clerk/clerk-react"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Form from "@components/Form"

const EditPrompt = () => {
    const user = useUser();
    const router = useRouter()
    // const { data: session } = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        // creator: user.user.id,
        prompt: "",
        tag: ""
    })
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`api/prompt/${promptId}`)
            const data = response.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
            if (promptId) getPromptDetails();
        }
    }, [promptId])
    // const userId = user.id;
    // console.log("user->" + user.user.id);
    const UpdatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true)

        if (!promptId) return alert("Error!!!Id not found")
        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // userId: user.user.id,
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
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={UpdatePrompt}
            />
        </div>
    )
}

export default EditPrompt
