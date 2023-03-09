using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Logic;
using Models;

namespace Apibackend.Controllers;

[ApiController]
[Route("[controller]")]
public class SongsController : ControllerBase
{
    private readonly SongLogic _songLogic = new SongLogic();
    
    [HttpGet("GetAllSongs")]
    public List<SongModel> GetAllSongs()
    {
        return _songLogic.GetAllSongs();
    }

    [HttpGet("Artist/{songArtist}")]
    public List<SongModel> GetSongByArtist(string songArtist)
    {
        return _songLogic.GetSongByArtist(songArtist);
    }

    [HttpGet("Name/{songName}")]
    public SongModel GetSongByName(string songName)
    {
        return _songLogic.GetSongByName(songName);
    }
    
    [HttpGet("{songId:int}")]
    public SongModel GetSongById(int songId)
    {
        return _songLogic.GetSongById(songId);
    }

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

    [HttpDelete("delete/{songId:int}")]
    public string DeleteASong(int songId)
    {
        throw new NotImplementedException();
    }
}