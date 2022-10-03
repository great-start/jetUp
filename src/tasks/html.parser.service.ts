import { Injectable } from '@nestjs/common';
import { parseDocument } from 'htmlparser2';
import { HttpService } from '@nestjs/axios';
import * as cssSelect from 'css-select';
import { PrismaService } from "../prisma.service";

@Injectable()
export class HtmlParserService {
  constructor(private readonly httpService: HttpService,
              private readonly prisma: PrismaService
  ) {}

  async getEmployeeList() {
    const employees = [];
    await this.httpService.axiosRef
      .get(`https://jetup.digital/team`, {
        responseType: 'document',
      })
      .then((value) => {
        const dom = parseDocument(value.data);
        const names = cssSelect.selectAll('.user-name', dom);
        const positions = cssSelect.selectAll('.position', dom);
        const texts = cssSelect.selectAll('.user-text', dom);

        for (let i = 0; i < names.length; i++) {
          employees.push({
            // @ts-ignore
            name: names[i].children[0].data,
            // @ts-ignore
            position: positions[i].children[0].data,
            // @ts-ignore
            text: texts[i].children[0].data
          })
        }
      });

    await this.prisma.employee.createMany({
      data: employees,
    })
  }
}
