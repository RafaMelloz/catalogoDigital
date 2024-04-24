import { Link } from "react-router-dom";

export function Page404(){
    return(
        <section className="w-full h-screen  ">
            <div className="max-w-96 mx-auto my-10">
                <h1 className="text-3xl text-center">
                    Algo parece ter dado errado, por favor volte a pagina inicial
                </h1>
                <Link className="bg-cyan-500/70 w-full block text-center mt-4 rounded py-2 font-semibold text-lg cursor-pointer hover:bg-cyan-500/50 hover:text-white/60" to={'/'}>Voltar</Link>
            </div>
        </section>
    )
}