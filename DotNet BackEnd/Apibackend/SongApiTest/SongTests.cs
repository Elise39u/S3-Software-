using Apibackend.Models;
using NUnit.Framework;

namespace SongApiTest;

public class SongTests
{
    [SetUp]
    public void Setup()
    {
    }
    
    [Test]
    public void Should_Succeed_CreateSong()
    {
        SongModel testSong = new SongModel(1,  "初音ミクの激唱", "Megamix+, Future Tone, Megamix,",
            "Hatsune Miku", "https://static.wikia.nocookie.net/vocaloid/images/a/a8/Miku_no_gekishou.jpg/revision/latest/scale-to-width-down/350?cb=20121212083435", 
            "Unknown", "Hard");
        
        Assert.AreEqual("Hatsune Miku", testSong.SongArtist,"Song Artist doesnt match the expected value");
        Assert.AreEqual("初音ミクの激唱", testSong.SongName,"Song Name doesnt match the expected value");
        Assert.AreEqual("Hard", testSong.SongDifficulties[0].ToString(),"Song-difficulty doesnt match the expected value");
    }
}