//import type { SectionProps } from "deco/types.ts";
import type { Products } from "../loaders/GetProdutosLoader.ts";
import Image from "apps/website/components/Image.tsx";

export interface ProductsListProps {
    
    /**@title Título da seção: */
    title: string;
    products?: Products;

}

/*
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

export async function loader({title}: ProductsListProps, _req: Request) {

    try {

        const response = await fetch('https://fakestoreapi.com/products');

        const products: Product[] = await response.json();

        return { products, title };

    } catch(error) {

        return { products: [],  error };

    };

}
*/ 
export default function ProductList({ products, title }: ProductsListProps) {

    return(

        <section class="w-4/5 m-auto grid grid-cols-1 justify-items-center gap-4">

            <div class="mt-4 mb-5">
                <h1 class="text-3xl md:text-5xl lg:text-6xl text-center">{title}</h1>
            </div>

            <ul class="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3 xl:grid-cols-4 ">

                {products?.map( (product) => (
                    
                    <li key={product.id}>

                        <a href="" class=" w-full hover:opacity-60">

                            <div class="flex flex-col justify-around items-center rounded bg-neutral-100 h-56 md:h-80 lg:h-96 w-full">

                                <h2 class="w-full truncate text-center text-xs px-2 md:text-lg lg:text-xl xl:text-2xl">{product.title}</h2>
                        
                                <Image 
                                    src={product.image}
                                    alt={`Foto do produto ${product.title}`}
                                    class="w-full h-36 md:h-44 object-cover"
                                    width={500}
                                    height={1200}
                                />

                                <p class="text-xs md:text-lg lg:text-xl xl:text-2xl">R$ {product.price}</p>

                            </div>

                        </a>
                        
                    </li>
                    
                ))}

            </ul>

        </section>

    );

};