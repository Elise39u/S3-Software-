using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Configuration;
using Models;

namespace EnityFrameworkDAL;


/*
 * For command usages https://stackoverflow.com/questions/56686093/unable-to-create-an-object-of-type-dbcontext
 */

public class DatabaseContext : DbContext
{
    public DbSet<SongModel> Songs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (optionsBuilder.IsConfigured)
        {
            return;
        }

        var conn = "server=localhost; database=songlibary; user=root; password=";
        optionsBuilder.UseMySql(conn, ServerVersion.AutoDetect(conn));
    }

    public DatabaseContext(DbContextOptions<DatabaseContext> options)
        : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        
    }

}