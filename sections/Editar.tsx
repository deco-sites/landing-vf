import EditFormulario from "../islands/EditFormulario.tsx";

export interface EditProps {
    /**
     * @title Título
     * @description Digite o título da seção
     */
    title: string;
}

export default function Editar({ title }: EditProps) {

    return (
        <EditFormulario title={title}  />
    )

}