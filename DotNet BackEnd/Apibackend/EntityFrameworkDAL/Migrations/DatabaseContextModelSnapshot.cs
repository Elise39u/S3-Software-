﻿// <auto-generated />
using EnityFrameworkDAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EnityFrameworkDAL.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Models.SongModel", b =>
                {
                    b.Property<int>("SongId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("SongAlbumImg")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("SongAlbumName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("SongArtist")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("SongGame")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("SongName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("SongId");

                    b.ToTable("Songs");
                });
#pragma warning restore 612, 618
        }
    }
}
