import { GoogleGenerativeAI } from "@google/generative-ai";
import API_KEY from "../../api_key";

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

// make a new file called api_key.ts and add the following code:
// const API_KEY = "YOUR_API_KEY";
// export default API_KEY;

async function getGeminiAnswer(text: string) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompts = [
    "Add some fancy fluff to this resume:",
    "Remove all the fluff, buzzwords, and bs from this resume:",
    "Parse this resume as any professional software would. Return response strictly as JSON.",
    "Provide feedback on the resume.",
  ];

//   const prompt = "Write a story about a robot.";
const prompt = prompts[0] + text;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text2 = response.text();
  console.log(text2);
  return text2;
}

export default getGeminiAnswer;
