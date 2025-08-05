export default function GetUsersHtmx() {

    return(

        <div>

            <div class="flex justify-center">
                <button type="button" 
                hx-get="http://localhost:3000/users" 
                hx-trigger="click"
                hx-target="#result"
                hx-indicator="#feedback"
                class="border rounded bg-stone-900 text-white p-2 mb-6"
                >
                Carregar Usuários
                </button>
            </div>

            <p id="feedback" class="htmx-indicator">Carregando...</p>
            <div id="result">
                        
            </div>


            <section hx-get="http://localhost:3000/users" hx-trigger="load"  hx-target="#resultLoad">

                <div id="resultLoad">
                        
                </div>

            </section>
                
        </div>

    );

};