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
        SongModel emptySongModel = new SongModel();
        SongModel song = _songDal.GetSongById(100);
        Assert.AreEqual(emptySongModel, song, "Song has been found with something inside");
    }
}