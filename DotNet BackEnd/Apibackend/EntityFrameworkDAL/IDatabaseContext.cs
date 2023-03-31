using Microsoft.EntityFrameworkCore;
using Models;

namespace EnityFrameworkDAL;

public interface IDatabaseContext
{ 
    DbSet<SongModel> Songs { get; set; }
}