import { AppContext } from "../../apps/site.ts";

 export interface NewProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
    
export default async function registerProduct(props: NewProduct, _req: Request, _ctx: AppContext): Promise<number> {

    try {

        const response = await fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props)
        });

        const result = await response.json();

        const status = response.status;

        console.log("Resultado do POST: ", result);

        return status;

    } catch(error) {

        console.log(`Erro no cadastro do produto${error}`);

        return 400;

    };
       
};