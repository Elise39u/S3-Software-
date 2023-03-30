using System.Collections.Generic;
using EnityFrameworkDAL;
using NUnit.Framework;
using EnityFrameworkDAL.Handlers;
using Microsoft.EntityFrameworkCore;
using Models;

namespace SongDALTest;

public class SongDALTest
{
    private static DatabaseContext _dbContext = new(new DbContextOptions<DatabaseContext>());
    private SongHandler _songDal = new SongHandler(_dbContext);
    private List<SongModel> _songs = new List<SongModel>();

    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Should_GetSongs_FromDataBase_Succeed()
    {
        Assert.AreEqual(0, _songs.Count, "Songs list is not empty or made properly");
        _songs = _songDal.getAllSongs();
        Assert.AreEqual(15, _songs.Count, "Songs list is now not empty yet");
    }

    [Test]
    public void Should_Succeed_GettingSongById()
    {
        SongModel song = _songDal.getSongById(1);
        
        Assert.AreEqual(1, song.SongId, "Song Id doesnt match asked record");
        Assert.AreEqual("Odds and Ends", song.SongName, "Song name doesnt match asked record found: " + song.SongName);
        Assert.AreEqual("Supercell", song.SongAlbumName, "Song album doesnt not match record found: " + song.SongAlbumName);
    }
    
    [Test]
    public void Should_Succeed_FailingGettingSong_ThatDoesntExist()
    {
        SongModel song = _songDal.getSongById(1000);
        Assert.IsNull(song, "We found something in the DB context");
    }

    [Test]
    public void Should_Succeed_GettingSongByArtist()
    {
        List<SongModel> songModels = _songDal.getSongByArtist("Hatsune Miku");
        Assert.AreEqual(4, songModels.Count, "There are more or less songs than expected found: " + songModels.Count);
    }

    [Test]
    public void Should_Succeed_GettingSongByName()
    {
        SongModel song = _songDal.getSongByName("Odds And Ends");
        Assert.AreEqual("Odds and Ends", song.SongName, "Song names doesnt match expected record odds and ends. Instead got: " + song.SongName);
    }
}