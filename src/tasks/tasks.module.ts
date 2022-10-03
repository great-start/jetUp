import { Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";

import { HtmlParserService } from "./html.parser.service";
import { TasksService } from './tasks.service';
import { PrismaService } from "../prisma.service";

@Module({
  providers: [TasksService, HtmlParserService, PrismaService],
  imports: [HttpModule]
})
export class TasksModule {}
