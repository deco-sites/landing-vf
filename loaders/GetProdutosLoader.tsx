export type Products = Product[];

export interface Product {

    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };

}

export default async function loader(_req: Request): Promise<Products> {

    try {

        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;

    } catch (error) {
        
        return [];

    };
    
};