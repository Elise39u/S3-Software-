using Apibackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Apibackend.Controllers;

[ApiController]
[Route("[controller]")]
public class SongsController : ControllerBase 
{
    [HttpGet("GetAllSongs")]
    public List<SongModel> GetAllSongs()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{songArtist}")]
    public List<SongModel> GetSongByArtist()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{songName}")]
    public SongModel GetSongByName()
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("{songId:int}")]
    public SongModel GetSongById(int songId)
    {
        throw new NotImplementedException();
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