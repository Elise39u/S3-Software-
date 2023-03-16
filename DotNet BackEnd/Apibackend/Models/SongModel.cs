using Microsoft.EntityFrameworkCore;

namespace Models;

[Keyless]
public class SongModel
{
    
    private readonly int _songId;
    private readonly string _songName;
    private readonly string _songGame;
    private readonly string _songArtist;
    private readonly string _songAlbumImg;
    private readonly string _songAlbumName;

    public int SongId
    {
        get => _songId;
        private init => _songId = value;
    }

    public string SongName
    {
        get => _songName;
        private init => _songName = value;
    }

    public string SongGame
    {
        get => _songGame;
        private init => _songGame = value;
    }

    public string SongArtist
    {
        get => _songArtist;
        private init => _songArtist = value;
    }

    public string SongAlbumImg
    {
        get => _songAlbumImg;
        private init => _songAlbumImg = value;
    }

    public string SongAlbumName
    {
        get => _songAlbumName;
        private init => _songAlbumName = value;
    }

    private List<SongDifficulty> _songDifficulties;

    public List<SongDifficulty> SongDifficulties
    {
        get => _songDifficulties;
        private init => _songDifficulties = value;
    }
    
    private void AddStartDiffculty(string songdifficultyname)
    {
        SongDifficulty difficulty = (SongDifficulty) Enum.Parse(typeof(SongDifficulty), songdifficultyname);
        SongDifficulties.Add(difficulty);
    }
    
    public List<SongDifficulty> AddDifficulties(List<SongDifficulty> songDifficulties, string songdifficultyname)
    {
        SongDifficulty difficulty = (SongDifficulty) Enum.Parse(typeof(SongDifficulty), songdifficultyname);
        songDifficulties.Add(difficulty);

        return songDifficulties;
    }

    public SongModel()
    {
        
    }

    public SongModel(string songName, string songGame, string songArtist, 
        string songAlbumImg, string songAlbumName, string songDiffculty)
    {
        SongName = songName;
        SongGame = songGame;
        SongArtist = songArtist;
        SongAlbumImg = songAlbumImg;
        SongAlbumName = songAlbumName;
        SongDifficulties = new List<SongDifficulty>();
        AddStartDiffculty(songDiffculty);
    }

    public SongModel(int songId, string songName, string songGame, string songArtist, 
        string songAlbumImg, string songAlbumName, string songDiffculty)
    {
        SongId = songId;
        SongName = songName;
        SongGame = songGame;
        SongArtist = songArtist;
        SongAlbumImg = songAlbumImg;
        SongAlbumName = songAlbumName;
        SongDifficulties = new List<SongDifficulty>();
        AddStartDiffculty(songDiffculty);
    }
    
    public SongModel(int songId, string songName, string songGame, string songArtist, 
        string songAlbumImg, string songAlbumName)
    {
        SongId = songId;
        SongName = songName;
        SongGame = songGame;
        SongArtist = songArtist;
        SongAlbumImg = songAlbumImg;
        SongAlbumName = songAlbumName;
        SongDifficulties = new List<SongDifficulty>();
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