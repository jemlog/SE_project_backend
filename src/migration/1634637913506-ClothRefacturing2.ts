import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClothRefacturing21634637913506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cloth" RENAME COLUMN "color" TO "beautiful"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cloth" RENAME COLUMN "beautiful" TO "color"`,
    );
  }
}
