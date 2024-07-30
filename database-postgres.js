import { randomUUID } from "crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
    async list (search) {
        let fruits;

        if (search){
            return fruits = await sql`select * from fruits where name ilike ${'%' + search + '%'}`
        } else {
            return fruits = await sql`select * from fruits`
        }
    
    }

    async create (fruits) {
        const fruitsId = randomUUID();
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
        } = fruits;

        await  sql`insert into fruits (id, family_order, gender, name, photo, carbohydrates, protein, fat, calories, sugar) VALUES (${fruitsId}, ${family_order}, ${gender}, ${name}, ${photo}, ${carbohydrates}, ${protein}, ${fat}, ${calories}, ${sugar})`
    
    }

    async update(id, fruits){
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
        } = fruits

        await sql`update fruits set family_order = ${family_order}, gender = ${gender}, name = ${name}, photo = ${photo}, carbohydrates = ${carbohydrates}, protein = ${protein}, fat = ${fat}, calories = ${calories}, sugar = ${sugar} WHERE id = ${id} `
    }

    async delet (id){
        await sql`delete from fruits where id = ${id}`
    }
}