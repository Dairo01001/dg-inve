import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { User } from 'generated/prisma/client';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty({ required: false })
  createdAt: Date;

  @ApiProperty({ required: false })
  updatedAt: Date;

  @ApiProperty({ required: false })
  deletedAt: Date | null;

  @Exclude()
  password: string;

  @ApiProperty()
  roleId: number;
}
