import { Controller, Get, Post, Put, Delete, Body, Param  } from "@nestjs/common";
import { CreateTaskDto } from "./controllers/create-task.dto";
import { Request, Response } from "express";

@Controller('tasks')
export class TasksController{

  @Get()
  getTasks() : {title: string, description: string, done: boolean} {
    return {
            "title": "task three",
            "description": "LinkedIn",
            "done": false
          };
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
