import type { SectionProps } from "deco/types.ts";
import Image from "apps/website/components/Image.tsx";

export interface ProductsListProps {
    
    /**@title Título da seção: */
    title: string;

}

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

export default function ProductList({ products, title}: SectionProps<typeof loader>) {

    return(

        <section class="w-4/5 m-auto grid grid-cols-1 justify-items-center gap-4">

            <div>
                <h1 class="text-3xl md:text-5xl lg:text-6xl">{title}</h1>
            </div>

            <ul class="grid grid-cols-2 gap-4 mb-3 md:grid-cols-3 lg:grid-cols-4 ">

                {products.map((product) => (
                    
                    <li key={product.id}>

                        <a href="" class=" w-full">
                            <div class="flex flex-col justify-around items-center rounded bg-neutral-100 h-56 md:h-80 w-full">

                                <h2 class="line-clamp-1 text-xs md:text-lg lg:text-2xl">{product.title}</h2>
                        
                                <Image src={product.image} 
                                class="w-full h-36 md:h-44 object-cover"
                                width={500}
                                height={1200}
                                />

                                <p class="text-xs md:text-lg lg:text-2xl">R$ {product.price}</p>

                            </div>
                        </a>
                        
                    </li>
                    
                ))}
            </ul>

        </section>

    );

};