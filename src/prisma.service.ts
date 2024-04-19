import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  constructor() {
    this.client = new PrismaClient();
  }

  private readonly client: PrismaClient;

  //   async user(id: number) {
  //     return this.client.user.findUnique({
  //       where: { id },
  //     });
  //   }
}
