import type { Task } from "../api/task";

const Row = ({ task }: { task: Task }) => {
	return (
		<tr>
			<td>{task.id}</td>
			<td>{task.name}</td>
			<td>{task.description}</td>
			<td>{task.completed ? "Yes" : "No"}</td>
		</tr>
	);
};

export const TodoTable = ({ tasks }: { tasks: Task[] }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Description</th>
					<th>Completed</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map((task) => (
					<Row key={task.id} task={task} />
				))}
			</tbody>
		</table>
	);
};
