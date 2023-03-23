﻿using DAL;
using EnityFrameworkDAL;
using EnityFrameworkDAL.interfaces;
using Models;

namespace Logic;

public class SongLogic : ISongLogicHandler
{
    private ISongHandler _songDalContext;

    public SongLogic(ISongHandler songHandler)
    {
        _songDalContext = songHandler;
    }

    public void AddSong(SongModel song)
    {
        _songDalContext.AddSong(song);
    }

    public void DeleteSong(int songId)
    {
        throw new NotImplementedException();
    }

    public void UpdateSong(SongModel song)
    {
        throw new NotImplementedException();
    }

    public SongModel getSongById(int songId)
    {
        throw new NotImplementedException();
    }

    public SongModel getSongByName(string songName)
    {
        throw new NotImplementedException();
    }

    public List<SongModel> getSongByArtist(string songArtist)
    {
        throw new NotImplementedException();
    }

    public List<SongModel> getAllSongs()
    {
        return _songDalContext.getAllSongs();
    }
}