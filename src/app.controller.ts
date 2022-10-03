import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/team')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllEmployee() {
    return this.appService.getAllEmployee()
  }

  @Get('/:position')
  getAllEmployeeByPosition(@Param('position') position: string) {
    return this.appService.getAllEmployeeOrByName(position);
  }
}
