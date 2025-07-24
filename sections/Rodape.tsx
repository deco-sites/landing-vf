export interface RodapeProps {
    /**
     * @title Nome de autoria do site:
     */
    author: string;
    /**
     * @title Ano de autoria:
     */
    year: string
}

export default function Rodape({ author, year }: RodapeProps) {

    return (

        <footer>
            <div class="w-full bg-black h-36 flex justify-center items-center">
                <p class="text-white">Desenvolvido por {author}, {year}.</p>
            </div>
        </footer>

    );

};