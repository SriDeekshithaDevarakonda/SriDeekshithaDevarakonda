//Create task management controllers in task.controller.ts:

import { Controller, Get, Post, Body, Request, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTasks(@Request() req) {
    return this.taskService.findAll(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createTask(@Body() task: Task, @Request() req) {
    task.userId = req.user.userId;
    return this.taskService.create(task);
  }
}
