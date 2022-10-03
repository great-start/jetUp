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

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExcludeEndpoint()
  @Get()
  getHello() {
    return 'Server hello!!!';
  }

  // @ApiOperation({
  //   summary: 'Sign up',
  //   description: 'Get all employees',
  // })
  // @ApiResponse({
  //   status: 200,
  //   schema: {
  //     example: [
  //       {
  //         id: 12,
  //         name: 'Vanya',
  //         position: 'Developer',
  //         createdAt: '2022-10-03 12:46:41.246',
  //       },
  //     ],
  //   },
  // })
  // @ApiBadRequestResponse({
  //   schema: {
  //     example: {
  //       "statusCode": 404,
  //     "message": "Not Found"
  //     },
  //   },
  // })
  // @ApiInternalServerErrorResponse({
  //   schema: {
  //     example: {
  //       status: 500,
  //       error: 'Server error',
  //     },
  //   },
  // })
  // @Get('team')
  // getAllEmployee() {
  //   return this.appService.getAllEmployees();
  // }

  // @Get('/')
  // @ApiQuery({
  //   name: 'name',
  //   required: false,
  //   type: String,
  // })
  // @ApiQuery({
  //   name: 'position',
  //   required: false,
  //   type: String,
  // })
  // getEmployeesByPosition(
  //   @Query('name') name: string,
  //   @Query('position') position: string,
  // ) {
  //   return this.appService.getEmployeesByPosition(name, position);
  // }
}
