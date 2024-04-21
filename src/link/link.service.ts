import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Link, Prisma } from '@prisma/client';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async link(
    LinkWhereUniqueInput: Prisma.LinkWhereUniqueInput,
  ): Promise<Link | null> {
    return this.prisma.link.findUnique({
      where: LinkWhereUniqueInput,
    });
  }

  async links(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LinkWhereUniqueInput;
    where?: Prisma.LinkWhereInput;
    orderBy?: Prisma.LinkOrderByWithRelationInput;
  }): Promise<Link[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.link.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createLink(data: Prisma.LinkCreateInput): Promise<Link> {
    return this.prisma.link.create({
      data,
    });
  }

  async updateLink(params: {
    where: Prisma.LinkWhereUniqueInput;
    data: Prisma.LinkUpdateInput;
  }): Promise<Link> {
    const { data, where } = params;
    return this.prisma.link.update({
      data,
      where,
    });
  }

  async deleteLink(where: Prisma.LinkWhereUniqueInput): Promise<Link> {
    return this.prisma.link.delete({
      where,
    });
  }
}
