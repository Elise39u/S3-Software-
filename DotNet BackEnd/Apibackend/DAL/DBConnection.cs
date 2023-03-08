using MySqlConnector;

namespace DAL;

public class DBConnection
{
    private static readonly string connectionString =
        "Server=127.0.0.1;User ID=root;Password=;Database=songlibary";

    public MySqlConnection Conn { get; } = new(connectionString);

    public MySqlConnection OpenConnection()
    {
        try
        {
            Conn.Open();
            return Conn;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    public string CloseConnection()
    {
        try
        {
            Conn.Close();
            return "Connection Closed";
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }
}