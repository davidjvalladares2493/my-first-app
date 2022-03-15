import { Injectable } from "@nestjs/common";
import { TaskInterface } from "./controllers/interfaces/TaskInterface.ts";

@Injectable()
export class TasksService {
  tasks: TaskInterface[] = [
    {
      "id": 1,
      "title": "task One",
      "description": "Facebook",
      "done": false
    },
    {
      "id": 2,
      "title": "task Two",
      "description": "Instagram",
      "done": false
    }
];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task{
    return this.tasks.find(task => task.id === id);
  }
}
