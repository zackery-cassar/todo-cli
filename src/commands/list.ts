import chalk from 'chalk';
import { readTasks } from '../storage';

export function listTasks(): void {
  const tasks = readTasks();

  if (tasks.length === 0) {
    console.log(chalk.yellow('No tasks yet. Add one with: todo add "task name"'));
    return;
  }

  tasks.forEach(task => {
    const id = chalk.gray(`[${task.id}]`);
    const title = task.status === 'completed'
      ? chalk.strikethrough.gray(task.title)
      : chalk.white(task.title);
    const status = task.status === 'completed'
      ? chalk.green('✔ done')
      : chalk.yellow('○ pending');

    console.log(`${id} ${title} ${status}`);
  });
}