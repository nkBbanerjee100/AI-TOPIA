import { Schema, model, models } from "mongoose";
const PromptSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,

    },
    likes: {
        type: Number,
        default: 0
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;