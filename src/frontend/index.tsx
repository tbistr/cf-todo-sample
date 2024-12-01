import type React from "react";
import { useEffect, useState } from "react";
import type { Task } from "../api/task";
import { client } from "../index.server";
import { CreateTaskForm } from "./CreateForm";
import { TodoTable } from "./TodoTable";

export const Index = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	useEffect(() => {
		client.api.tasks
			.$get()
			.then((r) => r.json())
			.then(setTasks);
	}, []);

	return (
		<>
			<h1>Tasks</h1>
			<TodoTable tasks={tasks} />
			<h2>Add New Task</h2>
			<CreateTaskForm />
		</>
	);
};
