using System.Data;
using Models;
using MySqlConnector;

namespace DAL;

public class SongDAL
{
    private DBConnection _dbConnection = new DBConnection();
    private List<SongModel> _songModels = new List<SongModel>();

    public List<SongModel> GetAllSongs()
    {
        _songModels.Clear();
        _dbConnection.OpenConnection();

        MySqlCommand query = new MySqlCommand(
            "SELECT * FROM song",
            _dbConnection.Conn);
        var result = query.ExecuteReader();
        while (result.Read())
        {
            SongModel song = new SongModel(result.GetInt32(0), result.GetString(1), result.GetString(2),
                result.GetString(3), result.GetString(4), result.GetString(5));
            _songModels.Add(song);
        }

        _dbConnection.CloseConnection();
        return _songModels;
    }

    public SongModel GetSongById(int songId)
    {
        SongModel askedSong = new SongModel();
        _dbConnection.OpenConnection();

        MySqlCommand query = new MySqlCommand(
            "SELECT * FROM SONG WHERE id=" + songId,
            _dbConnection.Conn);
        var result = query.ExecuteReader();
        while (result.Read())
        {
            askedSong = new SongModel(result.GetInt32(0), result.GetString(1), result.GetString(2),
                result.GetString(3), result.GetString(4), result.GetString(5));
        }

        _dbConnection.CloseConnection();
        return askedSong;
    }
}