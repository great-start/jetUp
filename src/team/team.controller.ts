import { Controller, Get, Query } from "@nestjs/common";
import { TeamService } from './team.service';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags
} from "@nestjs/swagger";

@ApiTags('Team')
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

@ApiOperation({
    summary: 'Sign up',
    description: 'Get all employees',
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
  @ApiBadRequestResponse({
    schema: {
      example: {
        "statusCode": 404,
      "message": "Not Found"
      },
    },
  })
  @ApiInternalServerErrorResponse({
    schema: {
      example: {
        status: 500,
        error: 'Server error',
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
