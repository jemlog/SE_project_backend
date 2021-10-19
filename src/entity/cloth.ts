import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 내부의 특별한 쿼리를 쓰려면 class 안에 static으로 명시해주기
@Entity()
export class Cloth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  top_bottom: string;

  @Column()
  short_long: string;

  @Column()
  color: string;

  @Column()
  material: string;
}
