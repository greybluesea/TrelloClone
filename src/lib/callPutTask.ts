export async function callPutTask(task: Task) {
  const simplifiedTask = {
    $id: task.$id,
    title: task.title,
    status: task.status,
  };

  const res = await fetch("/api/appwriteDB", {
    method: "PUT",
    /* headers: {
      "Content-Type": "application/json",
    }, */
    body: JSON.stringify(simplifiedTask),
  });

  /*  const data = await res.json();

  console.log(data); */
}
