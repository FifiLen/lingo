import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  let requestBody;

  try {
    // Spróbuj sparsować treść żądania jako JSON
    requestBody = JSON.parse(request.body || '{}');
  } catch (error) {
    console.error('Error parsing request body:', error);
    requestBody = {};
  }

  response.status(200).json({
    body: requestBody,
    query: request.query,
    cookies: request.cookies,
  });
}



// // api/openai.js
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { data } = req.body;

//     try {
//       const stream = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: data }],
//         stream: true,
//       });

//       for await (const part of stream) {
//         console.log(part.choices[0].delta);
//       }

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ success: false, error: "Method Not Allowed" });
//   }
// }