using DAL;
using EnityFrameworkDAL;
using EnityFrameworkDAL.interfaces;
using Models;

namespace Logic;

public class SongLogic : ISongLogicHandler
{
    private readonly ISongHandler _songDalContext;

    public SongLogic(ISongHandler songHandler)
    {
        _songDalContext = songHandler;
    }

    public void AddSong(SongModel song)
    {
        _songDalContext.AddSong(song);
    }

    public void DeleteSong(int songId)
    {
        _songDalContext.DeleteSong(songId);
    }

    public void UpdateSong(SongModel song)
    {
        _songDalContext.UpdateSong(song);
    }

    public SongModel getSongById(int songId)
    {
        return _songDalContext.getSongById(songId);
    }

    public SongModel getSongByName(string songName)
    {
        return _songDalContext.getSongByName(songName);
    }

    public List<SongModel> getSongByArtist(string songArtist)
    {
        return _songDalContext.getSongByArtist(songArtist);
    }

    public List<SongModel> getAllSongs()
    {
        return _songDalContext.getAllSongs();
    }
}