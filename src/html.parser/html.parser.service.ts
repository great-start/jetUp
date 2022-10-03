import { Injectable } from '@nestjs/common';
import { parseDocument, Parser } from "htmlparser2";
import { HttpService } from '@nestjs/axios';
import * as cssSelect from "css-select";
import DomHandler from "domhandler";
// import { PrismaService } from "../prisma.service";
import { isTag, hasChildren, Element, AnyNode } from "domhandler";



@Injectable()
export class HtmlParserService {
  constructor(private readonly httpService: HttpService) {}

  async getEmployeeList() {
    await this.httpService.axiosRef
      .get(`https://jetup.digital/team`, {
        responseType: 'document',
      })
      .then((value) => {
        const dom = parseDocument(value.data, {recognizeCDATA:true});
        let documents = cssSelect.selectAll(".user-name", dom)
        console.log(documents.forEach(value1 => {
          // @ts-ignore
          console.log(value1.children[0].data as string);
        }));
      })
}
}
