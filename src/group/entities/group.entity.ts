import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity({ name: 'groups' })
export class Group extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @BeforeInsert()
  nameUpperCase() {
    this.name = this.name.toUpperCase().trim();
  }
}
