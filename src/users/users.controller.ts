import {
  Controller,
  Body,
  Patch,
  ParseUUIDPipe,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from './entities/user.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { createBaseController } from 'src/common/common.controller';
import { Repository } from 'typeorm';

const baseController = createBaseController<User>([], '', ValidRoles.ADMIN);

@Controller('users')
export class UsersController extends baseController {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(User) readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  @Get(':id')
  @Auth(ValidRoles.USER, ValidRoles.ADMIN, ValidRoles.COMPANY)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Auth(ValidRoles.USER, ValidRoles.ADMIN, ValidRoles.COMPANY)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: User,
  ) {
    return this.usersService.update(id, updateUserDto, user);
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.usersService.remove(id, user);
  }
}
