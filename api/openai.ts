import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { message } = req.body;

    try {
      // Fetch the chat response
      const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: message }],
        stream: true,
      });

      let fullResponse = '';

      for await (const part of stream) {
        const delta = part.choices[0].delta;
        console.log(delta);

        if (delta && delta.content) { // Ensure delta.content is defined before concatenating
          fullResponse += delta.content;
        }
      }

      // Convert the chat response to speech
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "shimmer",
        input: fullResponse,
      });

      let audioBase64 = '';

      if (mp3 && mp3.arrayBuffer) {
        const buffer = Buffer.from(await mp3.arrayBuffer());
        audioBase64 = buffer.toString('base64');
      }

      res.status(200).json({ success: true, response: fullResponse, audio: audioBase64 });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
