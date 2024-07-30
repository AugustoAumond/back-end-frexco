import { randomUUID } from "crypto";

export class DatabseMemory {
    #products = new Map();

    list (search) {
        return Array.from(this.#products.entries()).map((items)=>{
            const id = items[0];
            const datas = items[1]
            return {
                id,
                ...datas
            }
        })
        .filter (products => {
            if (search) {
                return products.title.includes(search);
            }

            return true
        })
    }

    create ( product) {
        const productId = randomUUID();

        this.#products.set(productId, product);
    }

    update(id, product){
        this.#products.set(id, product)
    }

    delet (id){
        this.#products.delete(id)
    }
}