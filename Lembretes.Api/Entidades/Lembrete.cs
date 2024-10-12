namespace Lembretes.Api.Entidades
{
    public class Lembrete
    {
        public int Id { get; set; }
        public string Mensagem { get; set; } = string.Empty;
        public DateTime Data { get; set; }

    }
}
