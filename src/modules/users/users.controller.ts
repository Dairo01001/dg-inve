import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  async signupUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: [UserEntity] })
  async getUsers(): Promise<UserEntity[]> {
    return this.usersService.users({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity })
  async getUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserEntity> {
    const user = await this.usersService.user({ id: id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserEntity })
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.updateUser({
      where: { id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserEntity })
  async deleteUserById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserEntity> {
    return this.usersService.deleteUser({ id });
  }
}
