import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return "Server hello!!!";
  }

  @Get('team')
  getAllEmployee() {
    return this.appService.getAllEmployees()
  }

  @Get('team/:position')
  getEmployeesByPosition(@Param('position') position: string) {
    return this.appService.getEmployeesByPosition(position);
  }
}
