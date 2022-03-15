import { Controller, Get, Post, Put, Delete, Body, HttpCode  } from "@nestjs/common";
import { CreateTaskDto } from "./controllers/create-task.dto";


@Controller('tasks')
export class TasksController{

  @Get()
  getTasks() : {title: string, description: string, done: boolean} {
    return {
            "title": "task one",
            "description": "Instagram",
            "done": false
          };
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';

  }

}
