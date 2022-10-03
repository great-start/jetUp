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
    return this.appService.getAllEmployee()
  }

  @Get('team/:position')
  getAllEmployeeByPosition(@Param('position') position: string) {
    return this.appService.getAllEmployeeOrByName(position);
  }
}
