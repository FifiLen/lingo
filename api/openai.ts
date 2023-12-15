// import type { VercelRequest, VercelResponse } from '@vercel/node';
 
// export default function handler(
//   request: VercelRequest,
//   response: VercelResponse,
// ) {
//   console.log('Received request:', {
//     body: request.body,
//     query: request.query,
//     cookies: request.cookies,
//   });

//   response.status(200).json({
//     body: request.body,
//     query: request.query,
//     cookies: request.cookies,
//   });
// }

import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: message }],
        stream: true,
      });

      let fullResponse = '';

      for await (const part of stream) {
        const delta = part.choices[0].delta;
        console.log(delta);

        if (delta) {
          fullResponse += delta.content;
        }
      }

      // Zamiast zwracać otrzymane zapytanie, zwróć pełną odpowiedź od GPT-3.5-turbo
      res.status(200).json({ success: true, response: fullResponse });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
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