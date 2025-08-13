export type Users = User[];

export interface User {

    address: {
        geolocation: {
            lat: number,
            long: number;
        };
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
    __v: number;

}

export default async function loader(_req: Request): Promise<Users> {

    try {

        const response = await fetch("https://fakestoreapi.com/users");

        if (!response.ok) {

            console.log("Ocorreu um erro no response da requisição.");
            return [];

        };

        const users = await response.json();
        return users;

    } catch(error) {

        console.log("Erro na requisição de busca dos usuários: ", error);
        return [];

    };

};