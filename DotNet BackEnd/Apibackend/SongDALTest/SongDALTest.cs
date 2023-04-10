using System.Collections.Generic;
using System.Linq;
using EnityFrameworkDAL;
using NUnit.Framework;
using EnityFrameworkDAL.Handlers;
using EnityFrameworkDAL.interfaces;
using Microsoft.EntityFrameworkCore;
using Models;
using Moq;

namespace SongDALTest;

public class SongDALTest
{
    private IQueryable<SongModel> _data;
    private Mock<DbSet<SongModel>> _mockSet;
    private Mock<IDatabaseContext> _mockContext;
    private SongHandler _service;
    
    private static DatabaseContext _dbContext = new(new DbContextOptions<DatabaseContext>());
    private SongHandler _songDal = new SongHandler(_dbContext);
    private List<SongModel> _songs = new List<SongModel>();

    [SetUp]
    public void Setup()
    {
        _data = new List<SongModel>
        {
            new SongModel(1, "Odds and Ends", "MM+, FT, Arcade, MM", "Hatsune Miku", null, null),
            new SongModel(2, "When First Love Ends", "MM+, FT, Arcade, MM", "Hatsune Miku", null, null),
            new SongModel(3, "What do you mean", "MM+, FT, Arcade, MM", "Hatsune Miku", null, null)
        }.AsQueryable();
        
        _mockSet = new Mock<DbSet<SongModel>>();
        _mockSet.As<IQueryable<SongModel>>().Setup(m => m.Provider).Returns(_data.Provider);
        _mockSet.As<IQueryable<SongModel>>().Setup(m => m.Expression).Returns(_data.Expression);
        _mockSet.As<IQueryable<SongModel>>().Setup(m => m.ElementType).Returns(_data.ElementType);
        _mockSet.As<IQueryable<SongModel>>().Setup(m => m.GetEnumerator()).Returns(_data.GetEnumerator());

        _mockContext = new Mock<IDatabaseContext>();
        _mockContext.Setup(db => db.Songs).Returns(_mockSet.Object);

        _service = new SongHandler(_mockContext.Object);
    }

    
    [Test]
    public void Should_GetSongs_FromDataBase_Succeed()
    {
        //Act
        var result = _service.getAllSongs();
        
        //Assert
        Assert.AreEqual(_data.Count(), result.Count, "Found Song list is longer than expected. Found entry's: " + result.Count);
    }

    [Test]
    public void Should_Succeed_GettingSongById()
    {
        //Act
        var result = _service.getSongById(1);
        
        //Assert
        Assert.AreEqual(1, result.SongId, "Found song id doesnt match 1");
    }
    
    [Test]
    public void Should_Succeed_FailingGettingSong_ThatDoesntExist()
    {
        //Act
        var result = _service.getSongById(10000);
        
        //Assert
        Assert.IsNull(result, "Found result is existing instead of bening null");
    }

    [Test]
    public void Should_Succeed_GettingSongByArtist()
    {
        //Act
        var result = _service.getSongByArtist("Hatsune Miku");
        
        //Assert
        Assert.AreEqual(3, result.Count, "Found Song list is longer than expected. Found entry's: " + result.Count);
    }

    [Test]
    public void Should_Succeed_GettingSongByName()
    {
        //Act
        var result = _service.getSongByName("Odds and Ends");
        
        //Assert
        Assert.AreEqual("Odds and Ends", result.SongName, "Song names doesnt match expected record odds and ends. Instead got: " + result.SongName);
    }
    
    [Test]
    public void Should_Fail_GettingSongByName()
    {
        //Act
        var result = _service.getSongByName("Odds and Ends");
        
        //Assert
        Assert.AreEqual("Odds and Ends", result.SongName, "Song names doesnt match expected record odds and ends. Instead got: " + result.SongName);
    }
    
    [Test]
    public void Should_Fail_GettingSongsByAristName()
    {
        //Act
        var result = _service.getSongByArtist("MEIKO");
        
        //Assert
        Assert.AreEqual(0, result.Count, "Found Song list is longer than expected. Found entry's: " + result.Count);
    }

    [Test]
    public void Should_Succeed_AddingSong()
    {
        SongModel song = new SongModel(4, "Mellow yellow", "MM+, FT, Arcade, MM", "MEIKO", null, null);
        
        _service.AddSong(song);
        
        Assert.AreEqual(4, _data.Count(), "Data song list is not as big as expect number 4: found " + _data.Count());
        Assert.IsTrue(_data.Contains(song));
    }
}