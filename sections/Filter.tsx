export default function Filter() {

    return(

        <section>

            <div class="p-2">
                <input 
                    class="border rounded" 
                    type="text"
                    name="category"
                    placeholder="Buscar"
                    hx-get="http://localhost:3000/category"
                    hx-target="#resultFilter"
                    hx-trigger="change changed"
                />        
            </div>

            <div class="p-2" id="resultFilter">

            </div>

        </section>

    )

}