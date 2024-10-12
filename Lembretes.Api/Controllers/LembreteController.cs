using Lembretes.Api.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace Lembretes.Api.Controllers
{
    [ApiController]
    [Route("lembretes/")]
    public class LembreteController : ControllerBase
    {
        private List<Lembrete> bancoDeDados = new List<Lembrete>()
        {
                new()
                {
                    Id = 1,
                    Data = DateTime.Today.AddDays(1),
                    Mensagem = "TESTE 1",
                },
                new()
                {
                    Id = 2,
                    Data = DateTime.Today.AddDays(2),
                    Mensagem = "TESTE 2",
                },
                new()
                {
                    Id = 3,
                    Data = DateTime.Today.AddDays(2),
                    Mensagem = "TESTE 3",
                }
        };

        public LembreteController()
        {

        }

        [HttpGet]
        public IActionResult ExibirLembretes()
        {
            return Ok(bancoDeDados);
        }

        [HttpPost]
        public IActionResult CadastrarLembrete([FromBody]Lembrete novoLembrete)
        {
            bancoDeDados.Add(novoLembrete);
            return Ok();
        }

        [HttpDelete]
        public IActionResult ExcluirLembrete([FromQuery] int id)
        {
            var lembrete = bancoDeDados.Find(l => l.Id == id);
            bancoDeDados.Remove(lembrete);

            return Ok();
        }
    }
}
