import { GoogleGenerativeAI } from "@google/generative-ai";

async function generateContent() {
    const genAI = new GoogleGenerativeAI("AIzaSyBp_nN72SGfUDpwSC6AYi3xkZhjiNcEASY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "enter your prompt";

    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

generateContent();
