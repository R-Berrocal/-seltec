import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity({ name: 'companies' })
export class Company extends CoreEntity {
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

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
