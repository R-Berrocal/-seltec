import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity('observations')
export class Observation extends CoreEntity {
  @Column({ type: 'text', nullable: true })
  observation?: string;

  @Column({ type: 'timestamp' })
  initDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.observations)
  employee: Employee;
}
