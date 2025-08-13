import EditFormUsuario from "../islands/EditFormUsuario.tsx";
import { User } from "../loaders/GetUserLoader.ts";


export interface EditarUsuarioProps {
    /**
     * @title Título
     * @description Digite o título da seção
     */
    title: string;
    user?: User;
}

export default function EditarUsuario({ title, user }: EditarUsuarioProps) {

    return (
        <EditFormUsuario title={title} user={user} />
    );

};