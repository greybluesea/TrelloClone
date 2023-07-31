import { NextResponse } from "next/server";
import openai from "../../../../openai";

export async function POST(request: Request) {
  const taskTitlesObject = await request.json();
  console.log(taskTitlesObject);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user always as Tony, and say welcome to the TrelloClone App, limit the response to 300 characters",
      },
      {
        role: "user",
        content: `Hi there, would you please provide a summary of the following tasks, including how many tasks are in each list, then wish the user to have a productive day? Here's the data: ${JSON.stringify(
          taskTitlesObject
        )}`,
      },
    ],
  });

  const { data } = response;

  console.log("data is: ", data);
  console.log(data.choices[0].message);

  return NextResponse.json(data.choices[0].message);
}
