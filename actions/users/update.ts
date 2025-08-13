import { AppContext } from "../../apps/site.ts";
import { User } from "../../loaders/GetUserLoader.ts";

export default async function UpdateUser(user: User, _req: Request, _ctx: AppContext): Promise<{ result: string, success: boolean }> {

    try {

        const response = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        if (response.ok) {

            console.log("Usuário atualizado com sucesso pela Action: ", user);
            return { result: "Usuário atualizado com sucesso!", success: true };

        } else {

            console.log("Falha no resposta da requisição.");
            return { result: "Falha no resposta da requisição.", success: false };

        };
        
    } catch(error) {

        console.log("Ocorreu um erro na atualização do usuário: ", error);
        return { result: "Ocorreu um erro na atualização do usuário.", success: false }

    };
    
};