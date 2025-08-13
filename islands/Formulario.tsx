import { invoke } from "site/runtime.ts";
import { NewProduct } from "../actions/products/registerProduct.ts";

export interface FormProps {
   title: string;
}

function createInput(nameLabel: string, nameInput: string, type: string, idInput: string, htmlFor: string) {

    return (
        <div class="flex flex-col">
            <label htmlFor={htmlFor} class="text-base md:text-lg lg:text-2xl">{nameLabel}</label>
            <input type={type} name={nameInput} id={idInput} required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
        </div>
    );
        
};

function createTextArea(nameLabel: string, nameTextArea: string, idTextArea: string, htmlFor: string) {

    return (
        <div class="flex flex-col">
            <label htmlFor={htmlFor} class="text-base md:text-lg lg:text-2xl">{nameLabel}</label>
            <textarea type="textarea" name={nameTextArea} id={idTextArea} required class="border border-gray-300 rounded focus:outline-none resize-none"></textarea>
        </div>
    );

};

async function submitDataForm(event: Event) {

    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const formData = new FormData(form);

    const { id, title, price, description, category, image } = Object.fromEntries(formData);

    const product: NewProduct = {
        id: Number(id),
        title: String(title),
        price: Number(price),
        description: String(description),
        category: String(category),
        image: String(image)
    };

    const responseRequest = await invoke.site.actions.products.registerProduct(product);

    if (responseRequest === true) {
        alert("Cadastro do produto realizado!");
    } else {
        alert("Erro no cadastro do produto!");
    };

};

export default function Formulario({ title }: FormProps) {

    return (

        <section class="grid grid-cols-1 w-4/5 m-auto mb-3">

            <div class="mb-11 mt-5">
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl">{title}</h2>
            </div>

            <form onSubmit={submitDataForm}>

                    <div class="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        
                        {createInput("Id:", "id", "text", "inputId", "inputId")}
                        {createInput("Nome:", "title", "text", "inputTitle", "inputTitle")}
                        {createTextArea("Descrição", "description", "textAreaDescription", "textAreaDescription")}
                        {createInput("Preço:", "price", "number", "inputPrice", "inputPrice")}
                        {createInput("Categoria:", "category", "text", "inputCategory", "inputCategory")}
                        {createInput("Imagem:", "image", "text", "inputImage", "inputImage")}

                        <div class="w-1/3 m-auto md:w-1/4 md:col-start-1 md:col-span-2 md:mt-8 lg:col-start-1 lg:col-span-3">
                            <button type="submit" class="w-full border rounded bg-black text-white p-1 hover:opacity-70 md:text-lg lg:text-2xl lg:p-2">Cadastrar</button>
                        </div>

                </div>

            </form>

        </section>

    );

};