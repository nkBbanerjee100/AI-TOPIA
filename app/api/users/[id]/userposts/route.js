"use server"
import Prompt from "@models/prompt";
import connectionToDB from "@utils/database";
export async function GET(request, { params }) {
    try {
        await connectionToDB();
        // console.log(params.id);
        let prompt = await Prompt.find({}).populate('_id');
        prompt = prompt.filter((ele) => ele.firstName.replace(" ", "") == params.id)

        return new Response(JSON.stringify(prompt), { status: 201 })
    } catch (error) {
        return new Response("under users/id/posts!!!!", { status: 500 })
    }
}