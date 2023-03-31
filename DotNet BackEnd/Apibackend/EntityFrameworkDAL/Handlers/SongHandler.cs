using EnityFrameworkDAL.interfaces;
using Models;

namespace EnityFrameworkDAL.Handlers;

public class SongHandler : ISongHandler
{
    private readonly DatabaseContext _dbContext;
    private readonly IDatabaseContext _iDbContext;

    public SongHandler(DatabaseContext dbContext)
    {
        _dbContext = dbContext;
    }

    public SongHandler(IDatabaseContext dbContext)
    {
        _iDbContext = dbContext;
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
        if (_dbContext == null)
        {
            return _iDbContext.Songs.FirstOrDefault(song => song.SongId == songId);
        }
        return _dbContext.Songs.FirstOrDefault(song => song.SongId == songId);
    }

    public SongModel getSongByName(string songName)
    {
        if (_dbContext == null)
        {
            return _iDbContext.Songs.FirstOrDefault(song => song.SongName == songName);
        }
        return _dbContext.Songs.FirstOrDefault(song => song.SongName == songName);
    }

    public List<SongModel> getSongByArtist(string songArtist)
    {
        if (_dbContext == null)
        {
            return _iDbContext.Songs.Where(sa => sa.SongArtist == songArtist).ToList();
        }
        return _dbContext.Songs.Where(sa => sa.SongArtist == songArtist).ToList();
    }

    public List<SongModel> getAllSongs()
    {
        if (_dbContext == null)
        {
            return _iDbContext.Songs.ToList();
        }

        return _dbContext.Songs.ToList();
    }
}