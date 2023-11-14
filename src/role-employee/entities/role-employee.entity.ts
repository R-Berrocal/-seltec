import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity({ name: 'role_employees' })
export class RoleEmployee extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.roleEmployee)
  employees: Employee[];
  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
