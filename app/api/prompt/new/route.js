"use server"
import Prompt from "@models/prompt";
import connectionToDB from "@utils/database";
export async function POST(request) {
    const { firstName, lastName, prompt, tag } = await request.json()
    try {
        await connectionToDB();
        const newPrompt = await Prompt.create({
            firstName,
            lastName,
            prompt,
            tag
        })
        newPrompt.save();
        return new Response(JSON.stringify("success"), { status: 201 })
    } catch (error) {
        console.log("error is " + error);
        return new Response("Failed to Create", {
            status: 500
        })
    }

}