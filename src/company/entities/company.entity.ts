import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'companies' })
export class Company extends CoreEntity {
  @Column({ unique: true })
  nit: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true, unique: true })
  legalName?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true, unique: true })
  email?: string;

  @Column({ nullable: true })
  webSite?: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees: Employee[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.company)
  vehicles: Vehicle[];

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
