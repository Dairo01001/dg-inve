import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Role } from 'generated/prisma/client';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async role(
    userWhereUniqueInput: Prisma.RoleWhereUniqueInput,
  ): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async roles(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.RoleWhereUniqueInput;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithAggregationInput;
  }): Promise<Role[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.role.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
    return this.prisma.role.create({
      data,
    });
  }

  async updateRole(params: {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.RoleUpdateInput;
  }): Promise<Role> {
    const { where, data } = params;
    return this.prisma.role.update({
      data,
      where,
    });
  }

  async deleteRole(where: Prisma.RoleWhereUniqueInput): Promise<Role> {
    return this.prisma.role.update({
      where,
      data: { deletedAt: new Date() },
    });
  }
}
