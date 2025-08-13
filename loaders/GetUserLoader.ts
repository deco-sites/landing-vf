export interface User {
    address: {
        city: string,
        street: string,
        number: number,
        zipcode: string;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string,
        lastname: string; 
    };
    phone: string;
}

export interface LoaderProps {
    /**
     * @title ID do usuário:
     */
    id: number;
}

export default async function loader({ id }: LoaderProps, _req: Request): Promise<User | null> {

    try {

        const response = await fetch(`https://fakestoreapi.com/users/${id}`);

        if (response.ok) {

            const user = await response.json();
            console.log("Usuário carregado pelo loader: ", user);
            return user;

        } else {
            console.log("Erro na resposta da requisição: ", response.ok);
            return null;
        };

    } catch(error) {

        console.log("Erro na busca do usuário: ", error);
        return null;

    };

};