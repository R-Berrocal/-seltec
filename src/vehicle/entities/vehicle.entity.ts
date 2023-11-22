import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Company } from 'src/company/entities/company.entity';
import { AssignedVehicle } from 'src/assigned-vehicle/entities/assigned-vehicle.entity';

@Entity()
export class Vehicle extends CoreEntity {
  @Column({ unique: true })
  plate: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  model?: string;

  @Column({ nullable: true })
  trailerPlate?: string;

  @Column({ nullable: true })
  owner?: string;

  @ManyToOne(() => Company, (company) => company.vehicles)
  company: Company;

  @OneToMany(
    () => AssignedVehicle,
    (assignedVehicle) => assignedVehicle.vehicle,
  )
  assignedVehicles: AssignedVehicle[];
}
