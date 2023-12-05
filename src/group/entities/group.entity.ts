import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Location } from 'src/location/entities/location.entity';

@Entity({ name: 'groups' })
export class Group extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Employee, (employee) => employee.groups, { cascade: true })
  @JoinTable({ name: 'group_employees' })
  employees: Employee[];

  @OneToMany(() => Location, (location) => location.group)
  locations: Location[];

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
