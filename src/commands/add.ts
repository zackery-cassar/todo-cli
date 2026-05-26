import chalk from 'chalk';
import { readTasks, writeTasks } from '../storage';
import { Task } from '../types/task';

export function addTask(title: string): void {
  const tasks = readTasks();
  const newTask: Task = {
    id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
    title,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  console.log(chalk.green(`✔ Task added: [${newTask.id}] ${newTask.title}`));
}