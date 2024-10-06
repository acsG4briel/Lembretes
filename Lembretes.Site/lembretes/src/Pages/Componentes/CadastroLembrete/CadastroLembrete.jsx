import React, { useState } from "react";
import { CadastrarLembrete } from "../../../Services/LembreteService";

const CadastroLembrete = ({setRecarregarLembretes}) => {
  const [lembrete, setLembrete] = useState(null);

  return (
    <div className="text-black">
      <h1 className="text-2xl text-white font-bold">Novo Lembrete</h1>
      <input
        type="text"
        placeholder="Digite seu lembrete"
        className="mt-4 p-2 rounded border border-gray-400 w-full"
        onChange={(e) => {
          setLembrete({ ...lembrete, mensagem: e.target.value });
        }}
      />
      <input
        type="date"
        className="mt-4 p-2 rounded border border-gray-400 w-full"
        onChange={(e) => {
          setLembrete({ ...lembrete, data: e.target.value });
        }}
      />
      <button
        type="button"
        className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
        onClick={() => {
            CadastrarLembrete(lembrete);
            setRecarregarLembretes(true);
        }}
      >
        CRIAR
      </button>
    </div>
  );
};

export default CadastroLembrete;