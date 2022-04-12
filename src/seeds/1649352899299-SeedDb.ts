import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1649352899299 implements MigrationInterface {
  name = 'SeedDb1649352899299';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES('dragons'),('coffee'),('nestjs')`,
    );

    //password is 123
    await queryRunner.query(
      `INSERT INTO users (username,email,password) VALUES('foofoo','foo@foo.com','$2b$10$uNaxo4FzN.qAThZ2AhhdxeCUNPosM2fUUvA78CtdMlh9Cpm/Iqc36' )`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug,description,body,"tagList","authorId") 
        VALUES('first-article', 'first article description', 'first article body','coffee,dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug,description,body,"tagList","authorId") 
        VALUES('second-article', 'second article description', 'second article body','coffee,dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
