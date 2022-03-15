import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res  } from "@nestjs/common";
import { CreateTaskDto } from "./controllers/create-task.dto";
import { Request, Response } from "express";
import { TasksService } from "./tasks.service";
import { Intertask } from "./controllers/interfaces/TaskInterface.ts";

@Controller('tasks')
export class TasksController{

  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':taskId')
  getTask(@Param('taskId') taskId: string) {
    return this.taskService.getTask(parseInt(taskId));

  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    console.log(task);
    return 'Creating a task';

  }

  @Delete(':id')
  deleteTask(@Param('id') id ): string {
    console.log(id);
    return 'Deleting a task number: ' + id;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id): string {
    console.log('La tarea con id: ' + id + ' tiene los siguientes parametros: ' + task);
    return 'Updating a task';
  }

}
