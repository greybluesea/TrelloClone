import React from "react";

const formatTasksForAI = (board: Board) => {
  const tasksArray = Array.from(board.lists.entries());

  const tasksObject = tasksArray.reduce((object, [status, list]) => {
    object[status] = list.tasks;
    return object;
  }, {} as { [key in Status]: Task[] });

  /* const countsObject = Object.entries(tasksObject).reduce(
    (object, [status, tasks]) => {
      object[status as Status] = tasks.length;
      return object;
    },
    {} as { [key in Status]: number }
  );

  return countsObject; */

  return tasksObject;
};

const fetchSummary = async (board: Board) => {
  const tasksObject = formatTasksForAI(board);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tasksObject }),
  });

  const GPTdata = await res.json();
  const { content } = GPTdata;

  return content;
};
export default fetchSummary;
