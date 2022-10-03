import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from "@nestjs/axios";
import { AppService } from './app.service';
import { ScheduleModule } from "@nestjs/schedule";

import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from "./prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    HttpModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
