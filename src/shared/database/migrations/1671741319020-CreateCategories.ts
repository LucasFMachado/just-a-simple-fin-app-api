import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategories1671741319020 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isNullable: false,
                      },
                      {
                        name: 'title',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'type_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'active',
                        type: 'boolean',
                        default: true,
                        isNullable: false,
                    },
                    {
                        name: 'delete',
                        type: 'boolean',
                        default: false,
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    {
                      name: 'fk_type',
                      referencedTableName: 'types',
                      referencedColumnNames: ['id'],
                      columnNames: ['type_id'],
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}
