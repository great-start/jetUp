import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HtmlParserService } from './html.parser/html.parser.service';
import { HttpModule } from "@nestjs/axios";
// import { PrismaService } from "./prisma.service";
import { TasksModule } from './src/tasks/tasks.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService, HtmlParserService],
})
export class AppModule {}
