import chalk from 'chalk';
import { readTasks, writeTasks } from '../storage';

export function deleteTask(id: number): void {
  const tasks = readTasks();
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    console.log(chalk.red(`✘ No task found with id ${id}`));
    return;
  }

  const [removed] = tasks.splice(index, 1);
  writeTasks(tasks);
  console.log(chalk.green(`✔ Task [${id}] deleted: ${removed.title}`));
}