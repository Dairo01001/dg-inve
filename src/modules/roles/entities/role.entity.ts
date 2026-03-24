import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/client';

export class RoleEntity implements Role {
  @ApiProperty()
  name: string;

  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date | null;
}
