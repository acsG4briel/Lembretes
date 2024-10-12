import axios from 'axios';

export const CadastrarLembrete = (lembrete) => {
    console.log(lembrete);
}

export const ObterLembretes = async () => {
    try {
        const response = await axios.get('https://localhost:44393/lembretes', {
            headers: {
                'Accept': '*/*'
            }
        });

        return response.data;  
    } catch (error) {
        console.log('Erro ao obter lembretes:', error);
    }
};

export const ExcluirLembrete = (id) => {

}
