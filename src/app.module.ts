import { Module } from '@nestjs/common';
import { TasksModule } from './modules/tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://devsj4me:ZFVW3FIowTIT76T3@to-do.rjybawp.mongodb.net/To-Do?retryWrites=true&w=majority&appName=To-Do'),TasksModule]
})
export class AppModule {}
