import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';

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

  async findOne(id: string) {
    const group = await this.groupRepository.findOneBy({ id });
    if (!group) throw new NotFoundException('Group not found');
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
}
