import type React from "react";
import { useState } from "react";
import type { Task } from "../api/task";

export const CreateTaskForm = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");

		const newTask: Task = {
			id: 0,
			name,
			description,
			completed: false,
		};

		try {
			const response = await fetch("/api/tasks", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newTask),
			});

			if (!response.ok) {
				throw new Error("Failed to add task");
			}

			// 成功時の処理（例: フォームのリセット）
			setName("");
			setDescription("");
			alert("Task added successfully!");
		} catch (error: any) {
			setErrorMessage(error.message || "An unexpected error occurred");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{errorMessage && <p>{errorMessage}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="taskName">Task Name:</label>
					<input
						type="text"
						id="taskName"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor="taskDescription">Description:</label>
					<textarea
						id="taskDescription"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
				<div>
					<button type="submit" disabled={isLoading}>
						{isLoading ? "Adding..." : "Add Task"}
					</button>
				</div>
			</form>
		</>
	);
};
