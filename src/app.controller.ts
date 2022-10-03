import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HtmlParserService } from "./html.parser/html.parser.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly htmlParserService:HtmlParserService) {}

  @Get()
  getHello() {
    return this.htmlParserService.getEmployeeList();
  }
}
