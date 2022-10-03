import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getAllEmployeeOrByName(position: string): Promise<Employee[]> {
    const foundedEmployees = await this.prismaService.employee.findMany({
      where: {
        position: position.trim(),
      },
    });

    if (!foundedEmployees.length) {
      throw new NotFoundException();
    }

    return foundedEmployees;
  }

  async getAllEmployee(): Promise<Employee[]> {
    return await this.prismaService.employee.findMany();
  }
}
