"use server"
import Prompt from "@models/prompt";
import connectionToDB from "@utils/database";
export async function GET(request, { params }) {
    try {
        await connectionToDB();
        // console.log("kldld", params.id);
        const prompt = await Prompt.find({}).populate('_id');

        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        return new Response("under users/id/posts!!!!", { status: 500 })
    }
}