import React from "react";

const callAddTask = async (task: Partial<Task>) => {
  console.log(task);

  const res = await fetch("/api/appwriteDB/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  // console.log(res);
};

export default callAddTask;
