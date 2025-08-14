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
     * @minimum 1
     */
    idUser: number;
}

export default async function loader({ idUser }: LoaderProps, _req: Request): Promise<User | null> {

    try {

        const response = await fetch(`https://fakestoreapi.com/users/${idUser}`);

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