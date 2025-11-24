import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateSampleTable1763991152120 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'sample',
            columns: [
              {
                name: 'id_sample',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
              },
              {
                name: 'title',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'status',
                type: 'int2',
                default: 0,
                comment: '0 -InActive, 1- Active , 2-Deleted'
              },
              {
                name: 'created_at',
                type: 'bigint',
                isNullable: true
              },
              {
                name: 'updated_at',
                type: 'bigint',
                isNullable: true
              },
              {
                name: 'deleted_at',
                type: 'bigint',
                isNullable: true
              }
            ],
          }),
          false,
        );
    
        await queryRunner.createIndex("sample", new TableIndex({
          columnNames: ["id_sample","status"]
        }));
        
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("sample");
      }

}
