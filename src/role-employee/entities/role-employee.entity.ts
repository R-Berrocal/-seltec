import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'role_employees' })
export class RoleEmployee extends CoreEntity {
  @Column({ unique: true })
  name: string;
}
