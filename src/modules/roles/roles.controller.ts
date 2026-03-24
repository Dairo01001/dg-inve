import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RoleEntity } from './entities/role.entity';

@Controller('roles')
@ApiTags('Roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiCreatedResponse({ type: RoleEntity })
  async createRole(@Body() createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    return this.rolesService.createRole(createRoleDto);
  }

  @Get()
  @ApiOkResponse({ type: [RoleEntity] })
  async getRoles(): Promise<RoleEntity[]> {
    return this.rolesService.roles({
      orderBy: { createdAt: 'desc' },
    });
  }

  @Get(':id')
  @ApiOkResponse({ type: RoleEntity })
  async getRoleById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<RoleEntity> {
    const role = await this.rolesService.role({ id: id });
    if (!role) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }
    return role;
  }

  @Delete(':id')
  @ApiOkResponse({ type: RoleEntity })
  removeRoleById(@Param('id', ParseIntPipe) id: number): Promise<RoleEntity> {
    return this.rolesService.deleteRole({ id });
  }
}
