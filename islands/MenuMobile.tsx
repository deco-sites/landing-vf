import { useSignal } from "@preact/signals";
import CategoriasMobile from "./CategoriasMobile.tsx";

export interface NamesCategory {
    firstCategory: string;
    secondCategory: string;
    thirdCategoria: string;
}

export default function MenuMobile({firstCategory, secondCategory, thirdCategoria}: NamesCategory) {

    const menuMobileActive = useSignal(false);

    function showMenuMobile() {

        menuMobileActive.value = !menuMobileActive.value;

        console.log(`Menu mobile ativo: ${menuMobileActive}`);

    };

    return(

        <>
        
        <div class="col-start-2 row-start-1  flex justify-end pr-4 md:hidden">
                
                <button type="button" onClick={showMenuMobile}>

                    {menuMobileActive.value && (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    )}

                    {!menuMobileActive.value && (

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" class="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    )}

                </button>
                
        </div>

        <CategoriasMobile active={menuMobileActive.value} firstCategory={firstCategory} secondCategory={secondCategory} thirdCategoria={thirdCategoria}  />

        </>
        
    );

};