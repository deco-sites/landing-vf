import Formulario from "../islands/Formulario.tsx";

export interface CadastroProps {
    /**
     * @title Título da seção:
     */
    title: string;
}


export default function Cadastro({ title }: CadastroProps) {

    return (
        <Formulario title={title} />
    );

};