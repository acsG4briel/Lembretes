import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { ExcluirLembrete } from "../../../Services/LembreteService";

const ListaLembretes = ({ lembretes }) => {
  const [diaExpandido, setDiaExpandido] = useState(null);
  const [lembretesState, setLembretesState] = useState(lembretes);

  const handleDelete = (lembreteId) => {
    setLembretesState(lembretesState.filter((lembrete) => lembrete.id !== lembreteId));
    ExcluirLembrete(lembreteId)
  };

  const datasComLembretes = () => {
    const grouped = lembretesState.reduce((acc, lembrete) => {
      const dataFormatada = lembrete.data.toLocaleDateString();
      if (!acc[dataFormatada]) {
        acc[dataFormatada] = [];
      }
      acc[dataFormatada].push(lembrete);
      return acc;
    }, {});

    return Object.entries(grouped).map(([data, lembretesDoDia]) => (
      <div key={data} className="p-[5px] mt-[5px]">
        <div className="bg-[rgb(22,19,85)] text-white py-2 rounded pl-[5px] flex items-center">
          <strong>{data}</strong>
          <div className="bg-[rgb(13,11,46)] rounded-full inline-block ml-auto hover:bg-[rgb(31,25,133)] w-8 h-8 mr-[10px] flex items-center justify-center">
            <button onClick={() => setDiaExpandido(diaExpandido === data ? null : data)}>
              <strong>{lembretesDoDia.length}</strong>
            </button>
          </div>
        </div>
        {diaExpandido === data && (
          <div className="mt-2">
            {lembretesDoDia.map((lembrete) => (
              <div
                key={lembrete.id}
                className="bg-gray-100 p-2 mt-1 rounded text-gray-800 border border-gray-300 flex items-center justify-between"
              >
                <span>{lembrete.mensagem}</span>
                <div className="bg-[rgb(13,11,46)] rounded-full inline-block hover:bg-[rgb(31,25,133)] w-8 h-8 mr-[10px] flex items-center justify-center">
                  <button onClick={() => handleDelete(lembrete.id)}>
                    <FaTrash className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return <div>{datasComLembretes()}</div>;
};

export default ListaLembretes;


