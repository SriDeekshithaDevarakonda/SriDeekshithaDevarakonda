//Implement task management in task.service.ts:

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec();
  }

  async create(task: Task): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }
}
