using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Models;

public class SongModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int SongId { get; set; }
    public string SongName { get; set; }
    public string SongGame { get; set; }
    public string SongArtist { get; set; }
    public string SongAlbumImg { get; set; }
    public string SongAlbumName { get; set; }

    public SongModel()
    {
        
    }

    public SongModel(int songId, string songName, string songGame,
        string songArtist, string songAlbumImg, string songAlbumName)
    {
        SongId = songId;
        SongName = songName;
        SongGame = songGame;
        SongArtist = songArtist;
        SongAlbumImg = songAlbumImg;
        SongAlbumName = songAlbumName;
    }
}

public enum SongDifficulty
{
    Easy = 0,
    Normal = 1,
    Hard = 2,
    Extreme = 3,
    ExtraExtreme = 4,
} 