import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { createBaseController } from 'src/common/common.controller';
import { Group } from './entities/group.entity';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { User } from 'src/users/entities/user.entity';

const baseController = createBaseController<Group>([], '');

@Controller('group')
export class GroupController extends baseController {
  constructor(
    private readonly groupService: GroupService,
    @InjectRepository(Group) readonly groupRepository: Repository<Group>,
  ) {
    super(groupRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @Auth()
  @Get('count-employees')
  countEmployeesByGroup(@GetUser() user: User) {
    return this.groupService.countEmployeesByGroup(user);
  }

  @Auth()
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.groupService.findOne(term);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupService.update(id, updateGroupDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.groupService.remove(id);
  }
}
