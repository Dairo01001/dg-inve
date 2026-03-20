import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signupUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getUsers(): Promise<UserEntity[]> {
    return this.usersService.users({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    const user = await this.usersService.user({ id: id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UserEntity> {
    return this.usersService.deleteUser({ id });
  }
}
