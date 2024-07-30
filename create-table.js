import { sql } from './db.js';
// sql `DROP TABLE IF EXISTS fruits`.then(()=>{console.log(' Tabela Excluida!')})

sql`
CREATE TABLE fruits (
    id VARCHAR (100) PRIMARY KEY,
    family_order VARCHAR(255),
    gender VARCHAR(255),
    name VARCHAR(255),
    photo VARCHAR(255),
    carbohydrates DECIMAL(5, 2),
    protein DECIMAL(5, 2),
    fat DECIMAL(5, 2),
    calories INT,
    sugar DECIMAL(5, 2)
);
`
.then(()=>{
    console.log('tabela criada')
})