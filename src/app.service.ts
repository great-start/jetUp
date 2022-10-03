import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  async getEmployeesByPosition(name: string, position: string): Promise<Employee[]> {
    if (!name && !position) {
      return await this.prismaService.employee.findMany();
    }

    console.log(name, position);

    const foundedEmployees = await this.prismaService.employee.findMany({
      where: {
        position: position ? position.trim() : undefined,
        name: name ? name.trim() : undefined,
      },
    });

    if (!foundedEmployees.length) {
      throw new NotFoundException();
    }

    return foundedEmployees;
  }

  async getAllEmployees(): Promise<Employee[]> {
    return await this.prismaService.employee.findMany();
  }
}
