import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { TeamService } from './team.service';

@ApiTags('Team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiOperation({
    summary: 'Get all employees or list of employees by query',
    description: 'Get employees',
  })
  @ApiResponse({
    status: 200,
    schema: {
      example: [
        {
          id: 12,
          name: 'Vanya',
          position: 'Developer',
          createdAt: '2022-10-03 12:46:41.246',
        },
      ],
    },
  })
  @ApiNotFoundResponse({
    schema: {
      example: {
        statusCode: 404,
        message: 'Not Found',
      },
    },
  })
  @ApiInternalServerErrorResponse({
    schema: {
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
    },
  })
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
    return this.teamService.getEmployeesByPosition(name, position);
  }
}
