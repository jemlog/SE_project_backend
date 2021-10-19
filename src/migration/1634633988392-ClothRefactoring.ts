import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClothRefactoring1634633988392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cloth" RENAME COLUMN "color" TO "rainbow"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cloth" RENAME COLUMN "rainbow" TO "color"`,
    );
  }
}

// ts-node ./node_modules/typeorm/cli.js migration:run
