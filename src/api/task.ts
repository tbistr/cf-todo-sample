export type Task = {
	id: number;
	name: string;
	description: string;
	completed: boolean;
};

const dummy_tasks: Task[] = [
	{
		id: 1,
		name: "Task 1",
		description: "This is task 1",
		completed: false,
	},
	{
		id: 2,
		name: "Task 2",
		description: "This is task 2",
		completed: false,
	},
	{
		id: 3,
		name: "Task 3",
		description: "This is task 3",
		completed: false,
	},
];

export const createTask = async (task: Task): Promise<Task> => {
	return task;
};

export const getTasks = async (): Promise<Task[]> => {
	return dummy_tasks;
};

export const getTask = async (id: number): Promise<Task | null> => {
	return dummy_tasks.find((task) => task.id === id) || null;
};

export const deleteTask = async (id: number): Promise<boolean> => {
	return true;
};
