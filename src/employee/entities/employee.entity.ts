import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { RoleEmployee } from 'src/role-employee/entities/role-employee.entity';
import { Company } from 'src/company/entities/company.entity';
import { Group } from 'src/group/entities/group.entity';
import { Observation } from 'src/observations/entities/observation.entity';
import { AssignedVehicle } from 'src/assigned-vehicle/entities/assigned-vehicle.entity';

@Entity({ name: 'employees' })
export class Employee extends CoreEntity {
  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  identification: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  address?: string;

  @ManyToOne(() => RoleEmployee)
  roleEmployee: RoleEmployee;

  @ManyToOne(() => Company, (company) => company.employees)
  company: Company;

  @ManyToMany(() => Group, (group) => group.employees)
  groups: Group[];

  @OneToMany(() => Observation, (observation) => observation.employee)
  observations: Observation[];

  @OneToMany(
    () => AssignedVehicle,
    (assignedVehicle) => assignedVehicle.employee,
  )
  assignedVehicles: AssignedVehicle[];
  @BeforeInsert()
  emailLowercase() {
    this.email = this.email?.toLowerCase();
  }
}
