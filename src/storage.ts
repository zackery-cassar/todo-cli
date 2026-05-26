import { readFileSync, writeFileSync, existsSync } from 'fs';
import { Task } from './types/task';

const FILE_PATH = 'tasks.json';

export function readTasks(): Task[] {
  if (!existsSync(FILE_PATH)) return [];
  return JSON.parse(readFileSync(FILE_PATH, 'utf-8'));
}

export function writeTasks(tasks: Task[]): void {
  writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}