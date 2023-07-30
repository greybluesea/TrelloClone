import React from "react";

const callAddTask = async (newTask: NewTask) => {
  const res = await fetch("/api/appwriteDB/add", {
    method: "POST",
    /* headers: {
      "Content-Type": "application/json",
    }, */
    body: JSON.stringify(newTask),
  });

  // console.log(res);
};

export default callAddTask;
