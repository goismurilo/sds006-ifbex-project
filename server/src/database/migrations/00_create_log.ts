import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('logs', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('image').notNullable();

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('logs');
}