import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { HtmlParserService } from "./html.parser.service";
import { HttpModule } from "@nestjs/axios";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [],
  providers: [TasksService, HtmlParserService, PrismaService],
  imports: [HttpModule]
})
export class TasksModule {}
