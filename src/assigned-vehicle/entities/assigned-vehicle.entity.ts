import { Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Entity('assigned_vehicles')
export class AssignedVehicle extends CoreEntity {
  @Column({ unique: true })
  operationType?: string;

  @Column({ nullable: true })
  daysService?: number;

  @Column({ nullable: true })
  observations?: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.assignedVehicles)
  vehicle: Vehicle;
  @ManyToOne(() => Employee, (employee) => employee.assignedVehicles)
  employee: Employee;
}
