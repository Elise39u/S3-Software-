using DAL;
using Models;

namespace Logic;

public class SongLogic
{
    private SongDAL _songDal = new SongDAL();

    public List<SongModel> GetAllSongs()
    {
        List<SongModel> songModels = _songDal.GetAllSongs();
        return songModels;
    }

    public SongModel GetSongById(int songId)
    {
        return _songDal.GetSongById(songId);
    }

    public SongModel GetSongByName(string songName)
    {
        return _songDal.GetSongByName(songName);
    }

    public List<SongModel> GetSongByArtist(string songArtist)
    {
        return _songDal.GetAllSongsFromAnArtist(songArtist);
    }
}