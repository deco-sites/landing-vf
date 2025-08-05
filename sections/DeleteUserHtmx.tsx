import { useSignal } from "@preact/signals";

export default function HxOn() {

    const id = useSignal(1);

    return(

        <div class="w-full py-2">
            <div class="w-44 m-auto">
                <button 
                    class="border rounded w-full p-2 bg-red-600 text-white"
                    type="button" 
                    hx-delete={`http://localhost:3000/user/${id.value}`}
                    hx-confirm={`Deseja excluir o usuário com o id ${id.value}?`}
                    hx-on--before-request="alert('Making a request!')"
                    hx-target="#resultDelete"
                    hx-swap="beforeend"
                    hx-disabled-elt="this"
                >Excluir
                </button>
            </div>

            <div class="mt-3" id="resultDelete">
                <p class="text-center">A resposta do resultado da exclusão estará depois de mim.</p>
            </div>

        </div>
    );

};