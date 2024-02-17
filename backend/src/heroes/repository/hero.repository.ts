import { Injectable } from '@nestjs/common';
import { Hero } from '../models/hero.model';
import { userHero } from './fixtures/user';
import { PrismaService } from '../../prisma.service';
// import { Hero as PrismaHero, Prisma } from '@prisma/client';

@Injectable()
export class HeroRepository {
  constructor(private prisma: PrismaService) {}

  async findOneByEmail(email: string): Promise<Hero> {
    const prismaHero = this.prisma.hero.findUniqueOrThrow({
      where: {
        email: email,
      },
    });
    return prismaHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }
}
