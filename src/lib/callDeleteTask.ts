export async function callDeleteTask(task: Task) {
  const res = await fetch("/api/appwriteDB", {
    method: "DELETE",
    /* headers: {
      "Content-Type": "application/json",
    }, */
    body: JSON.stringify(task),
  });

  /*  const data = await res.json();

  console.log(data); */
}
