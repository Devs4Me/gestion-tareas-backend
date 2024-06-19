import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { Model } from 'mongoose';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

    async create(createTask: Task) {
        const newTask = new this.taskModel(createTask);
        return  newTask.save();
    }

    async findAll(){
        return this.taskModel.find();
    }

    async findOne(id: string){
        return this.taskModel.findById(id);
    }

    async update(id: string, task: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task, {new: true});
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }

}