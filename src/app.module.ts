import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HtmlParserService } from './tasks/html.parser.service';
import { HttpModule } from "@nestjs/axios";
// import { PrismaService } from "./prisma.service";
import { TasksModule } from './tasks/tasks.module';
import { ScheduleModule } from "@nestjs/schedule";
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
  providers: [AppService, HtmlParserService, PrismaService],
})
export class AppModule {}
