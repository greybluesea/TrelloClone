import { NextResponse } from "next/server";
import openai from "../../../../openai";

export async function Post(request: Request) {
  const { tasks } = await request.json();
  console.log(tasks);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user always as Tony, and say welcome to the TrelloClone App, limit the response to 200 characters",
      },
      {
        role: "user",
        content: `Hi there, would you please provide a summary of the following tasks. Count how many tasks are in each list, then wish the user to have a productive day! Here's the data: ${JSON.stringify(
          tasks
        )}`,
      },
    ],
    temperature: 0.8,
    n: 1,
    stream: false,
  });

  const { data } = response;

  console.log("data is: ", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
