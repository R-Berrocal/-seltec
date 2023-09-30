import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({ name: 'groups' })
export class Group extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Employee, (employee) => employee.groups, { cascade: true })
  @JoinTable({ name: 'group_employees' })
  employees: Employee[];

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
