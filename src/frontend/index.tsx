import type React from "react";
import { useEffect, useState } from "react";
import type { Task } from "../api/task";
import { CreateTaskForm } from "./CreateForm";
import { TodoTable } from "./TodoTable";

export const Index = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	useEffect(() => {
		fetch("/api/tasks")
			.then((res) => res.json())
			.then((data) => {
				setTasks(data);
				console.log(data);
			});
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
