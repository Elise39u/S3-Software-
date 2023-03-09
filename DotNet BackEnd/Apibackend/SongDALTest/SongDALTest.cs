using System.Collections.Generic;
using NUnit.Framework;
using DAL;
using Models;

namespace SongDALTest;

public class SongDALTest
{
    private SongDAL _songDal = new SongDAL();
    private List<SongModel> _songs = new List<SongModel>();

    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Should_Get5Songs_FromDataBase_Succeed()
    {
        Assert.AreEqual(0, _songs.Count, "Songs list is not empty or made properly");
        _songs = _songDal.GetAllSongs();
        Assert.AreEqual(5, _songs.Count, "Songs list is now not empty yet");
    }

    [Test]
    public void Should_Succeed_GettingSongById()
    {
        SongModel song = _songDal.GetSongById(1);
        Assert.AreEqual(1, song.SongId, "Song Id doesnt match asked record");
        Assert.AreEqual("When first Love ends", song.SongName, "Song name doesnt match asked record found: " + song.SongName);
        Assert.AreEqual("Supercell", song.SongAlbumName, "Song album doesnt not match record found: " + song.SongAlbumName);
    }
    
    [Test]
    public void Should_Succeed_FailingGettingSong_ThatDoesntExist()
    {
        SongModel song = _songDal.GetSongById(100);
        Assert.AreEqual(0, song.SongId, "Song id doesnt match 0");
        Assert.IsNull(song.SongName, "Song name is not empty i found: " + song.SongName);
        Assert.IsNull(song.SongArtist, "Song Artist is not empty i found: " + song.SongArtist);
    }

    [Test]
    public void Should_Succeed_GettingSongByArtist()
    {
        List<SongModel> songModels = _songDal.GetAllSongsFromAnArtist("Hatsune Miku");
        Assert.AreEqual(4, songModels.Count, "There are more or less songs than expected found: " + songModels.Count);
    }

    [Test]
    public void Should_Succeed_GettingSongByName()
    {
        SongModel song = _songDal.GetSongByName("Odds And Ends");
        Assert.AreEqual("Odds and Ends", song.SongName, "Song names doesnt match expected record odds and ends. Instead got: " + song.SongName);
    }
}