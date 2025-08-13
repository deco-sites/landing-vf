import { AppContext } from "../../apps/site.ts";

 export interface NewProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
    
export default async function registerProduct(product: NewProduct, _req: Request, _ctx: AppContext): Promise<boolean> {

    try {

        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });

        if (response.ok === true) {

            const result = await response.json();
            console.log("Cadastro do produto feito com sucesso: ", result);
            return response.ok;

        } else {
            
            console.log("Falha no cadastro do produto.");
            return false;

        };     

    } catch(error) {

        console.log("Erro no cadastro do produto: ", error);
        return false;

    };
       
};