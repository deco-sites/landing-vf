import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import MenuMobile from "../islands/MenuMobile.tsx";

export interface Props {
    /**
    * @title Logotipo do Cabeçalho:
    */
    imageLogo: ImageWidget;
    /**
     * @title Nome do Cliente:
     */
    nameClient: string;
    /**
     * @title Nome da primeira categoria:
     */
    firstCategory: string;
    /**
     * @title Nome da segunda categoria:
     */
    secondCategory: string;
    /**
     * @title Nome da terceira categoria:
     */
    thirdCategoria: string;

};

export default function Cabecalho({imageLogo, nameClient, firstCategory, secondCategory, thirdCategoria} : Props) {
    return (

        <header 
        class="w-full h-28 grid grid-cols-2 grid-rows-1 items-center bg-[#000] md:grid-cols-3 md:h-48"
        >

            <div class="col-start-1 row-start-1 pl-7 md:pl-5">
                {imageLogo && (<Image src={ imageLogo } alt={` Imagem da ${nameClient} ` } height={150} width={150} class="rounded w-16 h-16 md:w-[100px] md:h-[90px]" />)}
            </div>

            <MenuMobile firstCategory={firstCategory} secondCategory={secondCategory} thirdCategoria={thirdCategoria} />

            {/* Menu Tablet e Desktop */}
            <nav class="hidden md:grid md:col-start-3 md:pr-2 lg:justify-self-end lg:pr-7">
                
                <ul class="flex flex-row h-12 gap-4 text-white items-center">
                    <li><a href="" class="border border-white rounded p-3 hover:bg-gray-500">{firstCategory}</a></li>
                    <li><a href="" class="border border-white rounded p-3 hover:bg-gray-500">{secondCategory}</a></li>
                    <li><a href="" class="border border-white rounded p-3 hover:bg-gray-500">{thirdCategoria}</a></li>
                </ul>

            </nav>
            
        </header>
        
    )
};