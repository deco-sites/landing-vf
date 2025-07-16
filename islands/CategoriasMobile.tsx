export interface CategoryProps {
    active: boolean;
    firstCategory: string;
    secondCategory: string;
    thirdCategoria: string;
}

export default function CategoriasMobile({active, firstCategory, secondCategory, thirdCategoria}: CategoryProps) {

    return(

        <nav class="flex absolute top-24 z-10 w-screen bg-red-50 md:hidden ">

            {active && (
                <ul class="flex flex-col">
                    <li><a href="">{firstCategory}</a></li>
                    <li><a href="">{secondCategory}</a></li>
                    <li><a href="">{thirdCategoria}</a></li>
                </ul>
            )}

        </nav>

    )

}