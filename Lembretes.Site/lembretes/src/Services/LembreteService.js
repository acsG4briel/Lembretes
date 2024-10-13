export const CadastrarLembrete = (lembrete) => {
    console.log(lembrete);
}

export const ObterLembretes = () => {
    return [
            {
                id: 1,
                data: new Date('2023-10-01'),
                mensagem: "Lembrete 1: Reunião importante"
            },
            {
                id: 2,
                data: new Date('2023-11-15'),
                mensagem: "Lembrete 2: Prazo de entrega"
            },
            {
                id: 3,
                data: new Date('2023-12-31'),
                mensagem: "Lembrete 3: Festa de Ano Novo"
            },
            {
                id: 4,
                data: new Date('2023-10-01'),
                mensagem: "Lembrete 1: Reunião importante 2"
            },
            // {
            //     id: 5,
            //     data: new Date('2023-10-05'),
            //     mensagem: "Lembrete 1: Reunião importante"
            // },
            // {
            //     id: 6,
            //     data: new Date('2023-11-1'),
            //     mensagem: "Lembrete 2: Prazo de entrega"
            // },
            // {
            //     id: 7,
            //     data: new Date('2023-12-7'),
            //     mensagem: "Lembrete 3: Festa de Ano Novo"
            // },
            // {
            //     id: 8,
            //     data: new Date('2023-10-01'),
            //     mensagem: "Lembrete 1: Reunião importante 2"
            // },
          ]
}

export const ExcluirLembrete = (id) => {

}
