export interface PutUserProps {
    /**
     * @title Título:
     * @description Informe o título da página
     */
    title: string;
}

export default function UpdateUsersHtmx({ title }: PutUserProps) {

    return (

        <div>

            <div>
                <h2 class="text-center text-lg">{title}</h2>
            </div>
            
            <form class="mb-7" hx-put="http://localhost:3000/user" hx-trigger="submit" hx-target="#resultUpdate" hx-select="#valueInvalid">

                <div class="flex flex-col">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" id="name" class="border rounded" />
                </div>

                <div class="flex flex-col">
                    <label htmlFor="email">E-mail:</label>
                    <input type="text" name="email" id="email" class="border rounded"/>
                </div>

                <div class="w-full flex justify-center mt-4">
                    <button class="border rounded bg-black w-1/4 p-1 text-white" type="submit">Cadastrar</button>
                </div>

            </form>

            <div id="resultUpdate">

            </div>

        </div>
        
    );

};