import { Signal, useSignal } from "@preact/signals";
import { User } from "../loaders/GetUserLoader.ts";
import { invoke } from "site/runtime.ts";

export interface FormProps {
   title: string;
   user?: User;
}

async function sendUserForm(event: Event) {
        
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const formData = new FormData(form);

    const {
        id,
        firstname,
        lastname,
        email,
        phone,
        username,
        password,
        city,
        number,
        street,
        zipcode,
    } = Object.fromEntries(formData);

    const usuario: User = {
        id: Number(id),
        name: {
            firstname: String(firstname),
            lastname: String(lastname)
        },
        email: String(email),
        phone: String(phone),
        username: String(username),
        password: String(password),
        address: {
            city: String(city),
            number: Number(number),
            street: String(street),
            zipcode: String(zipcode),
        },
    };

    const request = await invoke.site.actions.users.update(usuario);

    alert(request.result); 

};

function createInput(nameLabel: string, nameInput: string, type: string, idInput: string, htmlFor: string, valueState: Signal) {
    
    return (
        <div class="flex flex-col">
            <label htmlFor={htmlFor} class="text-base md:text-lg lg:text-2xl">{nameLabel}</label>
            <input type={type} name={nameInput} id={idInput} value={valueState.value} onChange={e => valueState.value = e.currentTarget.value} required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
        </div>
    );

};

export default function EditFormUsuario({ title, user }: FormProps) {

    const id = useSignal(Number(user?.id));
    const city = useSignal(String(user?.address.city));
    const street = useSignal(String(user?.address.street));
    const number = useSignal(Number(user?.address.number));
    const zipcode = useSignal(String(user?.address.zipcode));
    const email = useSignal(String(user?.email));
    const username = useSignal(String(user?.username));
    const password = useSignal(String(user?.password));
    const firstname = useSignal(String(user?.name.firstname));
    const lastname = useSignal(String(user?.name.lastname));
    const phone = useSignal(String(user?.phone));

    if (!user) {

        return (
            <p class="text-center">Usuário não encontrado.</p>
        );
        
    };

    return (

        <section class="grid grid-cols-1 w-4/5 m-auto mb-3">

            <div class="mb-11 mt-5">
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl">{title}</h2>
            </div>

            <form onSubmit={sendUserForm}>

                    <div class="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {createInput("Id:", "id", "number", "inputId", "inputId", id)}
                        {createInput("E-mail:", "email", "email", "inputEmail", "inputEmail", email)}
                        {createInput("Nome de Usuário:", "username", "text", "inputUsername", "inputUsername", username)}
                        {createInput("Senha:", "password", "password", "inputPassword", "inputPassword", password)}
                        {createInput("Primeiro nome:", "firstname", "text", "inputFirstname", "inputFirstname", firstname)}
                        {createInput("Sobrenome:", "lastname", "text", "inputLastname", "inputLastname", lastname)}
                        {createInput("Telefone:", "phone", "text", "inputPhone", "inputPhone", phone)}
                        {createInput("Cidade:", "city", "text", "inputCity", "inputCity", city)}
                        {createInput("Rua:", "street", "text", "inputStreet", "inputStreet", street)}
                        {createInput("N. do endereço:", "number", "number", "inputNumber", "inputNumber", number)}
                        {createInput("Cep:", "zipcode", "text", "inputZipcode", "inputZipcode", zipcode)}

                        <div class="w-1/3 m-auto md:w-1/4 md:col-start-1 md:col-span-2 md:mt-8 lg:col-start-1 lg:col-span-3">
                            <button type="submit" class="w-full border rounded bg-black text-white p-1 hover:opacity-70 md:text-lg lg:text-2xl lg:p-2">Editar</button>
                        </div>

                </div>

            </form>

        </section>

    );

};