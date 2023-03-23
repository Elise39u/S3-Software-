using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Logic;
using Models;

namespace Apibackend.Controllers;

[ApiController]
[Route("/Song")]
public class SongsController : ControllerBase
{
    private readonly ISongLogicHandler _songLogicHandler;

    public SongsController(ISongLogicHandler logicHandler)
    {
        _songLogicHandler = logicHandler;
    }
    
    [HttpGet]
    public IEnumerable<SongModel> GetAllSongs()
    {
        return _songLogicHandler.getAllSongs();
    }

    [HttpGet]
    [Route("{songArtist}")]
    public IEnumerable<SongModel> GetSongByArtist(string songArtist)
    {
        return _songLogicHandler.getSongByArtist(songArtist);
    }

    [HttpGet]
    [Route("{songName}")]
    public IActionResult GetSongByName(string songName)
    {
        if (songName == "" || string.IsNullOrEmpty(songName))
        {
            return BadRequest();
        }
        
        _songLogicHandler.getSongByName(songName);

        return NoContent();
    }
    
    [HttpGet]
    [Route("{id}")]
    public IActionResult GetSongById(int id)
    {
        SongModel? result = _songLogicHandler.getSongById(id);

        if (result == null)
        {
            return NotFound();
        }

        return Ok(result);
    }

    [HttpPost]
    public IActionResult CreateASong(SongModel song)
    {
        if (song == null)
        {
            return BadRequest();
        }
        
        _songLogicHandler.AddSong(song);

        return NoContent();
    }
    
    [HttpPut]
    public IActionResult UpdateASong(SongModel song)
    {
        if (song == null)
        {
            return BadRequest();
        }
        
        _songLogicHandler.UpdateSong(song);

        return NoContent();
    }

    [HttpDelete]
    [Route("{id}")]
    public IActionResult DeleteASong(int id)
    {
        _songLogicHandler.DeleteSong(id);
        return NoContent();
    }
}

/*
[HttpPost("add/{songName}/{songArtist}/{songGame}/{songImg}/{songAlbumName}/{songDiffculty}")]
    public string CreateASong()
    {
        throw new NotImplementedException();
    }
    
    [HttpPut("update/{songId:int}/{songName}/{songArtist}/{songGame}/{songImg}/{songAlbumName}")]
    public string UpdateASong()
    {
        throw new NotImplementedException();
    }
*/