import { Column, Entity } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';

@Entity()
export class Vehicle extends CoreEntity {
  @Column()
  plate: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  model?: string;

  @Column({ nullable: true })
  trailerPlate?: string;

  @Column({ nullable: true })
  owner?: string;
}
