export async function callPutTask(task: Task) {
  const res = await fetch("/api/appwriteDB", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
}
