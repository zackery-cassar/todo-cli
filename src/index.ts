import { Command } from 'commander';
import { addTask } from './commands/add';
import { listTasks } from './commands/list';

const program = new Command();

program
  .name('todo')
  .description('A CLI todo app')
  .version('0.1.0');

program
  .command('add <title>')
  .description('Add a new task')
  .action((title: string) => {
    addTask(title);
  });

program
  .command('list')
  .description('List all tasks')
  .action(() => {
    listTasks();
  });

program.parse();