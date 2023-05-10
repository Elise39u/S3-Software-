﻿// <auto-generated />
using EnityFrameworkDAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EnityFrameworkDAL.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20230510085821_SeedDiffcultysData")]
    partial class SeedDiffcultysData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Models.DifficultyModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Diffcultys");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Easy"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Normal"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Hard"
                        },
                        new
                        {
                            Id = 4,
                            Name = "Extreme"
                        },
                        new
                        {
                            Id = 5,
                            Name = "Extra Extreme"
                        });
                });

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

                    b.Property<string>("SongProducer")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("SongId");

                    b.ToTable("Songs");
                });
#pragma warning restore 612, 618
        }
    }
}
