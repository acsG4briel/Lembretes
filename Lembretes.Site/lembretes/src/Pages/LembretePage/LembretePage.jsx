import React from "react";
import { useEffect, useState} from "react";
import CadastroLembrete from "../Componentes/CadastroLembrete/CadastroLembrete";
import { ObterLembretes } from "../../Services/LembreteService";
import ListaLembretes from "../Componentes/ListaLembretes/ListaLembretes";

const LembretePage = () => {
    const [lembretes, setLembretes] = useState([]);
    const [recarregarLembretes, setRecarregarLembretes] = useState(false);

    useEffect(() => {
        var retorno = ObterLembretes();
        setLembretes(retorno.lembretes);
        setRecarregarLembretes(false);
    }, [recarregarLembretes]);

    return (
        <div className="bg-[rgb(5,4,22)] h-screen flex justify-center items-center">
            <div class="ConteudoWrapper" className="bg-[rgb(13,11,46)] p-8 rounded-lg shadow-lg text-white max-w-md mx-auto">
                <CadastroLembrete 
                    setRecarregarLembretes={setRecarregarLembretes}
                />

                {lembretes.length > 0 && 
                    <ListaLembretes 
                        lembretes={lembretes} 
                    />
                }
            </div>
        </div>
    );
}

export default LembretePage;
