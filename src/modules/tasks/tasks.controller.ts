import { Body, Controller, NotFoundException,
        Get, Post, Put, Delete, 
        ValidationPipe, UsePipes, Param, 
        HttpCode} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UsePipes(new ValidationPipe())
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    async findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    async findByID(@Param('id') id: string){
        const task = await this.tasksService.findOne(id);
        if (!task) throw new NotFoundException('Task not found');
        return task;
    }

    @Post()
    async create(@Body() body: CreateTaskDto){
        return this.tasksService.create(body);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateTaskDto){
        const task = await this.tasksService.update(id, body);
        if (!task) throw new NotFoundException('Task not found');
        return task;
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const task = await this.tasksService.delete(id);
        if (!task) throw new NotFoundException('Task not found');
        return task;

    }


}