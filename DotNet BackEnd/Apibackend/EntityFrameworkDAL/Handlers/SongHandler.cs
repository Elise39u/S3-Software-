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
        throw new NotImplementedException();
    }

    public void UpdateSong(SongModel song)
    {
        throw new NotImplementedException();
    }

    public SongModel getSongById(int songId)
    {
        throw new NotImplementedException();
    }

    public SongModel getSongByName(string songName)
    {
        throw new NotImplementedException();
    }

    public List<SongModel> getSongByArtist(string songArtist)
    {
        throw new NotImplementedException();
    }

    public List<SongModel> getAllSongs()
    {
        return _dbContext.Songs.ToList();
    }
}