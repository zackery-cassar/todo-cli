import chalk from 'chalk';
import { readTasks, writeTasks } from '../storage';

export function completeTask(id: number): void {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    console.log(chalk.red(`✘ No task found with id ${id}`));
    return;
  }

  if (task.status === 'completed') {
    console.log(chalk.yellow(`Task [${id}] is already completed`));
    return;
  }

  task.status = 'completed';
  writeTasks(tasks);
  console.log(chalk.green(`✔ Task [${id}] completed: ${task.title}`));
}