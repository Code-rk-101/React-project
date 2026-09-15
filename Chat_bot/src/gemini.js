import { GoogleGenerativeAI } from "@google/generative-ai";
const api="AIzaSyDCU0WV3vI-WQDt8aZMs5wKdko0crvtmrI"

const genAI = new GoogleGenerativeAI(api);
const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_GEMINI_MODEL });

const generationConfig =
{
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) 
{
    const chatSession = model.startChat({
        generationConfig,
        history:[
        ],
    });

    
    const result = await chatSession.sendMessage(prompt);
    return(result.response.text());
}
export default run;
