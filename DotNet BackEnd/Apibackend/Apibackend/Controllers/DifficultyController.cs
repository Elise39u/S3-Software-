using Microsoft.AspNetCore.Mvc;
using Models;

namespace Apibackend.Controllers;

[ApiController]
[Route("/Difficultys")]
public class DifficultyController
{
    public DifficultyController()
    {
        
    }

    [HttpGet]
    public IEnumerable<DifficultyModel> GetAllDifficultys()
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    [Route("{id}")]
    public IActionResult GetDifficultyById(int id)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    [Route("{Name}")]
    public IActionResult GetDifficultyByName(string Name)
    {
        throw new NotImplementedException();
    }

    [HttpPut]
    public IActionResult UpdateDifficulty(DifficultyModel difficulty)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public IActionResult AddDifficulty(DifficultyModel difficulty)
    {
        throw new NotImplementedException();
    }

    [HttpDelete]
    public IActionResult DeleteDifficulty(DifficultyModel difficulty)
    {
        throw new NotImplementedException();
    }
}