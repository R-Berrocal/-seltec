import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Location } from 'src/location/entities/location.entity';

@Entity()
export class IncomeHistory extends CoreEntity {
  @Column({ type: 'varchar' })
  opration: string;

  @Column({ type: 'varchar', nullable: true })
  observation?: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => Employee, (employee) => employee.incomeHistory)
  employee: Employee;

  @ManyToOne(() => Location)
  location: Location;
}
