import React from "react";

const formatTasksForAI = (board: Board) => {
  const tasksArray = Array.from(board.lists.entries());

  const tasksObject = tasksArray.reduce((object, [status, list]) => {
    object[status] = list.tasks;
    return object;
  }, {} as { [key in Status]: Task[] });

  const countsObject = Object.entries(tasksObject).reduce(
    (object, [status, tasks]) => {
      object[status as Status] = tasks.length;
      return object;
    },
    {} as { [key in Status]: number }
  );

  const taskTitlesObject = Object.entries(tasksObject).reduce(
    (object, [status, tasks]) => {
      object[status as Status] = tasks.map((task) => task.title);
      return object;
    },
    {} as { [key in Status]: string[] }
  );

  return taskTitlesObject;
};

const fetchSummary = async (board: Board) => {
  const taskTitlesObject = formatTasksForAI(board);
  console.log(taskTitlesObject);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskTitlesObject),
  });

  console.log(res);

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};
export default fetchSummary;
