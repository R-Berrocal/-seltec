import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Group extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @Column()
  local: string;
}
