"use client"
import { useSession } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
    const { session } = useSession();
    const [post, setPost] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchPost = async () => {
            if (session?.user?.id) {
                const response = await fetch(`/api/users/${session.user.id}/posts`);
                const data = await response.json();
                setPost(data);
            } else {
                router.push("/login"); // Redirect to login page if user is not logged in
            }
        };
        fetchPost();
    }, [session, router]);
    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    };
    const handleDelete = async (post) => {
        const cnfrm = confirm("Are you sure want to delete???")
        if (cnfrm) {
            try {
                console.log(post._id, post);
                await fetch(`api/prompt/${post._id}`, {
                    method: "DELETE"
                })
                const filteredPost = post.filter((p) => p._id !== post._id)
                setPost(filteredPost)
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div>
            <Profile name="My" desc="Welcome to your Profile" data={post} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    );
};

export default MyProfile;
