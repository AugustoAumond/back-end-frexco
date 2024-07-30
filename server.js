import { fastify } from 'fastify';

// import { DatabseMemory } from './datasbase-memory.js';
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

// const database = new DatabseMemory();
const database = new DatabasePostgres();

server.post('/fruits', async (request, reply) => {
    const {
        gender, 
        name, 
        photo, 
        family_order, 
        order, 
        carbohydrates, 
        protein,
        fat, 
        calories, 
        sugar
    } = request.body;

    await database.create({
        gender, 
        name, 
        photo, 
        family_order, 
        order, 
        carbohydrates, 
        protein,
        fat, 
        calories, 
        sugar
    })

    console.group()

    return reply.status(201).send();
})

server.get(('/fruits'), async (request) => {
    const search = request.query.search;

    const fruits = await database.list(search);

    console.log(fruits, search);

    return fruits
})

server.put(('/fruits/:id'), async (request, reply) => {
    const fruitsId = request.params.id;

    const {
        family_order, 
        gender, 
        name, 
        photo, 
        carbohydrates, 
        protein, 
        fat, 
        calories, 
        sugar
    } = request.body;

    const fruits = database.update(fruitsId, {
        family_order, 
        gender, 
        name, 
        photo, 
        carbohydrates, 
        protein, 
        fat, 
        calories, 
        sugar
    })

    return reply.status(204).send();
})

server.delete(('/fruits/:id'), async (request, reply) => {
    const productsId = request.params.id;

    await database.delet(productsId);

    return reply.status(204).send();
})

server.listen({
    host:  '0.0.0.0',
    port: process.env.PORT ?? 3333,
});