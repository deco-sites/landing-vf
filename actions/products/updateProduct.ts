import { AppContext } from "../../apps/site.ts";
import { NewProduct } from "./registerProduct.ts";

export default async function updateProduct(product: NewProduct, _req: Request, _ctx: AppContext): Promise<{ result: string, success: boolean }> {

    try {

        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            console.log("Falha na edição do produto: ", product);
            return { result: "A edição do produto falhou.", success: response.ok };
        };

        console.log("Produto editado: ", product);
        return { result: "Produto editado com sucesso!", success: response.ok };
            
    } catch (error) {

        console.log("Erro na edição do produto: ", error);
        return { result: "Erro na edição do produto.", success: false };

    };

};


