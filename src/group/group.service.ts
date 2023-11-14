import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as IsUUID } from 'uuid';
import { Group } from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { User } from 'src/users/entities/user.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

@Injectable()
export class GroupService {
  private logger: Logger = new Logger('GroupService');
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>,
    readonly handleExceptionsService: HandleExceptionsService,
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    try {
      const group = this.groupRepository.create(createGroupDto);
      return await this.groupRepository.save(group);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(term: string) {
    let group: Group;
    if (IsUUID(term)) {
      group = await this.groupRepository.findOne({
        where: { id: term },
        relations: ['employees'],
      });
    } else {
      group = await this.groupRepository.findOne({
        where: { name: term.toUpperCase() },
        relations: ['employees'],
      });
    }
    if (!group) throw new NotFoundException(`Group with ${term} not found`);
    return group;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto) {
    await this.findOne(id);
    try {
      const group = await this.groupRepository.preload({
        id,
        ...updateGroupDto,
      });
      await this.groupRepository.save(group);
      return group;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const group = await this.findOne(id);
    try {
      await this.groupRepository.softDelete(id);
      return group;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async countEmployeesByGroup(userAuth: User) {
    const queryBuilder = this.groupRepository
      .createQueryBuilder('group')
      .leftJoinAndSelect('group.employees', 'employee')
      .select('group.name', 'group')
      .addSelect('COUNT(employee.id)', 'employees')
      .groupBy('group.name');

    if (userAuth.company && userAuth.role === ValidRoles.COMPANY) {
      queryBuilder.where('employee.companyId = :companyId', {
        companyId: userAuth.company?.id,
      });
    }

    return queryBuilder.getRawMany();
  }
}
