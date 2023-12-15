import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  message: z
    .string()
    .min(4, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

function giveMessageToServer(message: string) {
  // Użyj fetch, aby wysłać dane do funkcji serverless
  fetch('/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Server response:', data);
      // Tutaj możesz dodatkowo obsłużyć odpowiedź z serwera, jeśli to konieczne
    })
    .catch(error => console.error('Error sending data to server:', error));
}


export function TextareaForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


  /// -- utwórz zmienną która będzie przyjmowała tą wartość przy submicie: {JSON.stringify(data, null, 2)}


  function onSubmit(data: z.infer<typeof FormSchema>) {
    const message = `${JSON.stringify(data, null, 2)}`
     console.log(message);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    giveMessageToServer(message);
  }

  // function giveMessageToServer(message: string){
  //   // tutaj umieszczamy funkcję która przekaże dane do serwera
  //   fetch("http://localhost:8000/api/messages", {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({message}),
  //     });
  // }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>O czym chciałbyś dziś porozmawiać?</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none shad-textarea"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="shad-button_primary" type="submit">Let's Talk</Button>
      </form>
    </Form>
  )
}
