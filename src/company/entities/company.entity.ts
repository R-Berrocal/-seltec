import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'companies' })
export class Company extends CoreEntity {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true, unique: true })
  legalName?: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true, unique: true })
  email?: string;

  @Column({ nullable: true })
  webSite?: string;
}
