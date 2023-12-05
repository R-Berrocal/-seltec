import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity('observations')
export class Observation extends CoreEntity {
  @Column({ type: 'text', nullable: true })
  observation?: string;

  @Column({ type: 'timestamp', nullable: true })
  initDate?: Date;

  @Column({ type: 'timestamp', nullable: true })
  endDate?: Date;

  @Column({ type: 'boolean' })
  isApproved: boolean;

  @ManyToOne(() => Employee, (employee) => employee.observations)
  employee: Employee;
}
