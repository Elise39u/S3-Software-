using Models;

namespace Logic;

public interface ISongLogicHandler
{
    void AddSong(SongModel song);
    void DeleteSong(int songId);
    void UpdateSong(SongModel song);
    SongModel getSongById(int songId);
    SongModel getSongByName(string songName);
    List<SongModel> getSongByArtist(string songArtist);
    List<SongModel> getAllSongs();
}