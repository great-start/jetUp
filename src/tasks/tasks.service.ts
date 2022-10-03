import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

import { HtmlParserService } from './html.parser.service';

@Injectable()
export class TasksService {
  constructor(private readonly htmlParserService: HtmlParserService) {}

  @Timeout(500)
  async handleTimeout() {
    return this.htmlParserService.getEmployeeList();
  }
}
