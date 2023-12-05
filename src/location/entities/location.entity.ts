import { BeforeInsert, Column, Entity, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Group } from 'src/group/entities/group.entity';

@Entity('locations')
export class Location extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Group, (group) => group.locations)
  group: Group;

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
