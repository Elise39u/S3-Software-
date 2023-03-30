using EnityFrameworkDAL.interfaces;
using Models;

namespace EnityFrameworkDAL.Handlers;

public class SongHandler : ISongHandler
{
    private readonly DatabaseContext _dbContext;

    public SongHandler(DatabaseContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void AddSong(SongModel song)
    {
        _dbContext.Songs.Add(song);
        _dbContext.SaveChanges();
    }

    public void DeleteSong(int songId)
    {
        SongModel? removeSong = _dbContext.Songs.Find(songId);
        
        if (removeSong == null) return;
        _dbContext.Songs.Remove(removeSong);
        _dbContext.SaveChanges();
    }

    public void UpdateSong(SongModel song)
    {
        SongModel? updateSong = _dbContext.Songs.Find(song.SongId);

        if (updateSong != null)
        {
            updateSong.SongName = song.SongName;
            updateSong.SongArtist = song.SongArtist;
            updateSong.SongGame = song.SongGame;
            updateSong.SongAlbumImg = song.SongAlbumImg;
            updateSong.SongAlbumName = song.SongAlbumName;
        }
    }

    public SongModel getSongById(int songId)
    {
        return _dbContext.Songs.Find(songId);
    }

    public SongModel getSongByName(string songName)
    {
        return _dbContext.Songs.FirstOrDefault(song => song.SongName == songName);
    }

    public List<SongModel> getSongByArtist(string songArtist)
    {
        return _dbContext.Songs.Where(sa => sa.SongArtist == songArtist).ToList();
    }

    public List<SongModel> getAllSongs()
    {
        return _dbContext.Songs.ToList();
    }
}