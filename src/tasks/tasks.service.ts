import { Injectable, Logger } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { HtmlParserService } from './html.parser.service';

@Injectable()
export class TasksService {
  constructor(private readonly htmlParserService: HtmlParserService) {}

  @Timeout(0)
  async handleTimeout() {
    return this.htmlParserService.getEmployeeList();
  }
}
