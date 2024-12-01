import { Hono } from "hono";
import { type Task, createTask, deleteTask, getTask, getTasks } from "./task";

export const api = new Hono();

api.post("/tasks", async (c) => {
	const new_task: Task = await c.req.json();
	const task = await createTask(new_task);
	return c.json(task);
});

api.get("/tasks", async (c) => {
	const tasks = await getTasks();
	return c.json(tasks);
});

api.get("/tasks/:id", async (c) => {
	const id = Number.parseInt(c.req.param("id"));
	const task = await getTask(id);
	if (task === null) {
		c.status(404);
		return c.json({ error: "Task not found" });
	}
	return c.json(task);
});

api.delete("/tasks/:id", async (c) => {
	const id = Number.parseInt(c.req.param("id"));
	const deleted = await deleteTask(id);
	if (!deleted) {
		c.status(404);
		return c.json({ error: "Task not found" });
	}
	return c.json({ message: "Task deleted" });
});
