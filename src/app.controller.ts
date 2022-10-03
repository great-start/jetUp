import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBadRequestResponse,
  ApiExcludeEndpoint,
  ApiInternalServerErrorResponse,
  ApiOperation, ApiQuery,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";
import { ApiImplicitQuery } from "@nestjs/swagger/dist/decorators/api-implicit-query.decorator";

@ApiTags('team')
@Controller('/team')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
  })
  @ApiQuery({
    name: 'position',
    required: false,
    type: String,
  })
  getEmployeesByPosition(
    @Query('name') name: string,
    @Query('position') position: string,
  ) {
    return this.appService.getEmployeesByPosition(name, position);
  }
}
