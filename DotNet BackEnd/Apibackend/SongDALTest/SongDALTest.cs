using System.Collections.Generic;
using System.Linq;
using EnityFrameworkDAL;
using NUnit.Framework;
using EnityFrameworkDAL.Handlers;
using EnityFrameworkDAL.interfaces;
using Logic;
using Microsoft.EntityFrameworkCore;
using Models;
using Moq;

namespace SongDALTest;

public class SongDALTest
{
    [SetUp]
    public void Setup()
    {
    }

    
    [Test]
    public void Should_GetSongByName_FromDataBase_Succeed()
    {
        //with help of https://learn.microsoft.com/en-us/ef/core/testing/testing-without-the-database?source=recommendations and CHATGPT
        // Arrange
        var repositoryMock = new Mock<ISongHandler>();
        repositoryMock
            .Setup(r => r.getSongByName("Odds and Ends"))
            .Returns(new SongModel
            {
                SongName = "Odds and Ends", SongGame = "FT, MM, MM+, Arcade", SongArtist = "Hatsune Miku",
                SongAlbumImg = "", SongAlbumName = ""
            });
        
        var logicSong = new SongLogic(repositoryMock.Object);

        // Act
        var result = logicSong.getSongByName("Odds and Ends");

        // Assert
        repositoryMock.Verify(r => r.getSongByName("Odds and Ends"), Times.Once);
        Assert.AreEqual("Odds and Ends", result.SongName);
        Assert.AreEqual("Hatsune Miku", result.SongArtist);
        Assert.AreEqual("FT, MM, MM+, Arcade", result.SongGame);
    }

    [Test]
    public void Should_AddSongToRepsoity_Succes()
    {
        //Arrange
        var repositoryMock = new Mock<ISongHandler>();
        var logicSong = new SongLogic(repositoryMock.Object);

        var songToAdd = new SongModel
        {
            SongName = "Mellow Yellow", SongArtist = "MEIKO", SongGame = "FT, MM, MM+, Arcade",
            SongAlbumImg = "", SongAlbumName = ""
        };
        
        //Act
        logicSong.AddSong(songToAdd);
        
        //Arrange
        repositoryMock.Verify(r => r.AddSong(songToAdd), Times.Once);
    }

    [Test]
    public void Should_GetAllSongsFromRespoitry_Succes()
    {
        //Arrange
        var repositoryMock = new Mock<ISongHandler>();
        repositoryMock.Setup(r => r.getAllSongs())
            .Returns(new List<SongModel>
            {
                new() {SongName = "Mellow Yellow", SongArtist = "MEIKO", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
                new() {SongName = "Odds and Ends", SongArtist = "Hatsune Miku", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
                new() {SongName = "Roshin Yuukai", SongArtist = "Kegamine Rin", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
                new() {SongName = "Stardust Uptopia", SongArtist = "Megurine Luka", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
                new() {SongName = "Butterfly on your right shoulder", SongArtist = "Kegamine Len", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
                new() {SongName = "Knight of Light", SongArtist = "KAITO, Hatsune Miku", SongGame = "FT, MM, MM+, Arcade", 
                    SongAlbumImg = "", SongAlbumName = ""},
            });
        var logicSong = new SongLogic(repositoryMock.Object);

        //Act
        var getSongs = logicSong.getAllSongs();
        
        //Arrange
        repositoryMock.Verify(r => r.getAllSongs(), Times.Once);
        Assert.AreEqual(6, getSongs.Count, "Song list doesnt match count i found: " + getSongs.Count.ToString() + " entrys");
    }
    
    [Test]
    public void Should_GetSongByName_FromDataBase_Fails()
    {
        // Arrange
        var repositoryMock = new Mock<ISongHandler>();
        repositoryMock
            .Setup(r => r.getSongByName("Odds and Ends"))
            .Returns(new SongModel
            {
                SongName = "Odds and Ends", SongGame = "FT, MM, MM+, Arcade", SongArtist = "Hatsune Miku",
                SongAlbumImg = "", SongAlbumName = ""
            });
        
        var logicSong = new SongLogic(repositoryMock.Object);

        // Act
        var result = logicSong.getSongByName("Mellow Yellow");

        // Assert
        repositoryMock.Verify(r => r.getSongByName("Mellow Yellow"), Times.Once);
        Assert.IsNull(result);
    }
    
    [Test]
    public void Should_Success_GetSongByArtist()
    {
        // Arrange
        var repositoryMock = new Mock<ISongHandler>();
        repositoryMock.Setup(r => r.getSongByArtist("Hatsune Miku"))
            .Returns<string>( artist =>
            {
                var songs = new List<SongModel>
                {
                    new()
                    { SongName = "When first Love Ends", SongArtist = "Hatsune Miku", SongGame = "FT, MM, MM+, Arcade",  
                        SongAlbumImg = "", SongAlbumName = "" },
                    new() { SongName = "Odds and Ends", SongArtist = "Hatsune Miku", SongGame = "FT, MM, MM+, Arcade",
                        SongAlbumImg = "", SongAlbumName = "" },
                    new() { SongName = "Roshin Yuukai", SongArtist = "Kegamine Rin", SongGame = "FT, MM, MM+, Arcade",
                        SongAlbumImg = "", SongAlbumName = "" },
                    new() { SongName = "Stardust Uptopia", SongArtist = "Megurine Luka", SongGame = "FT, MM, MM+, Arcade",
                        SongAlbumImg = "", SongAlbumName = "" }, 
                    new() { SongName = "Butterfly on your right shoulder", SongArtist = "Kegamine Len", SongGame = "FT, MM, MM+, Arcade",
                        SongAlbumImg = "", SongAlbumName = "" },
                    new() { SongName = "Knight of Light", SongArtist = "KAITO, Hatsune Miku", SongGame = "FT, MM, MM+, Arcade",
                        SongAlbumImg = "", SongAlbumName = "" },
                };
                return songs.Where(s => s.SongArtist.Contains(artist)).ToList();
            });
        var logicSong = new SongLogic(repositoryMock.Object);

        // Act
        var result = logicSong.getSongByArtist("Hatsune Miku");

        // Assert
        repositoryMock.Verify(r => r.getSongByArtist("Hatsune Miku"), Times.Once);
        Assert.AreEqual(3, result.Count, "Expected enty count doesnt match found one. I found: " + result.Count.ToString() + " entys");
    }

    [Test]
    public void Should_UpdateSongInDatabase_Success()
    {
        //Arrange
        var repositoryMock = new Mock<ISongHandler>();
        var logicSong = new SongLogic(repositoryMock.Object);

        var songToUpdate = new SongModel
        {
            SongName = "Mellow Yellow", SongArtist = "MEIKO", SongGame = "FT, MM, MM+, Arcade",
            SongAlbumImg = "", SongAlbumName = ""
        };
        
        //Act
        logicSong.UpdateSong(songToUpdate);
        
        //Assert
        repositoryMock.Verify(r => r.UpdateSong(songToUpdate));
    }
    
    [Test]
    public void Should_DeleteInDatabase_Success()
    {
        //Arrange
        var repositoryMock = new Mock<ISongHandler>();
        var logicSong = new SongLogic(repositoryMock.Object);

        //Act
        logicSong.DeleteSong(1);
        
        //Assert
        repositoryMock.Verify(r => r.DeleteSong(1));
    }
}