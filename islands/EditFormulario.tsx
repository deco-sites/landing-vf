import { invoke } from "site/runtime.ts";
import { NewProduct } from "../actions/products/registerProduct.ts";
import { useSignal } from "@preact/signals";

export interface FeedbackRequest {
    result?: string;
    success?: boolean;
}

export interface FormProps {
   title: string;
}

function validateDataProduct(product: NewProduct): boolean {
    
    if (!product.category || !product.description || !product.id || !product.image || !product.price || !product.title) {
        return false;
    };

    return true;

}; 

export default function EditFormulario({ title }: FormProps) {

    const feedbackUpdate = useSignal<FeedbackRequest>({});

    async function editProduct(event: Event) {

        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const product: NewProduct = {
            id: Number(formData.get("id")),
            title: String(formData.get("title")),
            price: Number(formData.get("price")),
            description: String(formData.get("description")),
            category: String(formData.get("category")),
            image: String(formData.get("image"))
        };

        const resultValidate = validateDataProduct(product);

        if (resultValidate) {

            feedbackUpdate.value = await invoke.site.actions.products.updateProduct(product);

        };

    };

    return (

        <section class="grid grid-cols-1 w-4/5 m-auto mb-3">

            <div class="mb-11 mt-5">
                <h2 class="text-center text-2xl md:text-4xl lg:text-5xl">{title}</h2>
            </div>

            <form onSubmit={editProduct}>

                    <div class="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                        <div class="flex flex-col">
                            <label htmlFor="inputId" class="text-base md:text-lg lg:text-2xl">Id:</label>
                            <input type="text" name="id" id="inputId" required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
                        </div>

                        <div class="flex flex-col">
                            <label htmlFor="inputTitle" class="text-base md:text-lg lg:text-2xl">Nome:</label>
                            <input type="text" name="title" id="inputTitle" required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
                        </div>

                        <div class="flex flex-col">
                            <label htmlFor="inputDescription" class="text-base md:text-lg lg:text-2xl">Descrição:</label>
                            <textarea type="textarea" name="description" id="inputDescription" required class="border border-gray-300 rounded focus:outline-none resize-none"></textarea>
                        </div>

                        <div class="flex flex-col">
                            <label htmlFor="inputPrice" class="text-base md:text-lg lg:text-2xl">Preço:</label>
                            <input type="number" name="price" id="inputPrice" step="0.01" min="0" required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
                        </div>

                        <div class="flex flex-col">
                            <label htmlFor="inputCategory" class="text-base md:text-lg lg:text-2xl">Categoria:</label>
                            <input type="text" name="category" id="inputCategory" required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
                        </div>

                        <div class="flex flex-col">
                            <label htmlFor="inputImage" class="text-base md:text-lg lg:text-2xl">Imagem:</label>
                            <input type="text" name="image" id="inputImage" required class="border border-gray-300 rounded focus:outline-none md:h-7 lg:h-9" />
                        </div>

                        <div class="w-1/3 m-auto md:w-1/4 md:col-start-1 md:col-span-2 md:mt-8 lg:col-start-1 lg:col-span-3">
                            <button type="submit" class="w-full border rounded bg-black text-white p-1 hover:opacity-70 md:text-lg lg:text-2xl lg:p-2">Editar</button>
                        </div>

                </div>

                {feedbackUpdate.value.success ? <p class="text-center text-green-600 mt-3">{feedbackUpdate.value.result}</p> : <p class="text-center text-red-600">{feedbackUpdate.value.result}</p>}

            </form>

        </section>

    );

};