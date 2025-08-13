import { Users } from "../loaders/GetUsersLoader.ts";

export interface PropsListaUsuarios {
    /**
     * @title Título
     * @description Informe o título da seção
     */
    title: string;
    users?: Users;
}

export default function ListaUsuarios({ title, users }: PropsListaUsuarios) {

    return (

        <section>

            <div>
                <h1 class="text-center">{title}</h1>
            </div>

            <div class="mt-6">
                <ul>
                    {users?.map( (user) =>  
                        <li key={user.id}>
                            <p class="mb-3 text-center">{user.username}</p>
                        </li>
                    )}
                </ul>
            </div>

        </section>

    )

};