"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("_id");

    const [userPosts, setUserPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/userposts`,
                // {
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify({ userName })
            );
            const data = await response.json();
            console.log(params?.id);
            setUserPosts(data);
        };

        if (params?.id) fetchPosts();
    }, [params.id]);

    return (
        <Profile
            name={params?.id}
            desc={`Welcome to ${params?.id}'s personalized profile page. Explore ${params?.id}'s exceptional prompts and be inspired by the power of their imagination`}
            data={userPosts}
        />
    );
};

export default UserProfile;