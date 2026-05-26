import { Command } from 'commander';
import { addTask } from './commands/add';
import { listTasks } from './commands/list';
import { completeTask } from './commands/complete';


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

program
  .command('complete <id>')
  .description('Mark a task as completed')
  .action((id: string) => {
    completeTask(parseInt(id));
  });

program.parse();