export async function callDeleteTask(task: Task) {
  const simplifiedTask = {
    $id: task.$id,
    title: task.title,
    status: task.status,
    ...(task.image && { image: task.image }),
  };

  const res = await fetch("/api/appwriteDB/delete", {
    method: "POST",
    /* headers: {
      "Content-Type": "application/json",
    }, */
    body: JSON.stringify(simplifiedTask),
  });
}
