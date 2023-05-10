using EnityFrameworkDAL.Migrations;
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
    public DbSet<DifficultyModel> Diffcultys { get; set; }
    public DbSet<SongDifficultyModals> SongDifficultys { get; set; }

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
        modelBuilder.Entity<SongModel>().HasKey(c => new { c.SongId });
        modelBuilder.Entity<DifficultyModel>().HasKey(d => new {d.Id});
        
        modelBuilder.Entity<SongDifficultyModals>()
            .HasKey(sd => new { sd.SongId, sd.DifficultyId });

        /*
        modelBuilder.Entity<SongDifficultyModals>()
            .HasOne(sd => sd.SongModal)
            .WithMany(s => s.SongDifficulties)
            .HasForeignKey(sd => sd.SongId);

        modelBuilder.Entity<SongDifficultyModals>()
            .HasOne(sd => sd.Difficulty)
            .WithMany()
            .HasForeignKey(sd => sd.DifficultyId);
            */
    }

}