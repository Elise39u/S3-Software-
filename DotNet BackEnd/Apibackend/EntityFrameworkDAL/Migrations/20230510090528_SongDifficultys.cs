

#nullable disable

using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
namespace EnityFrameworkDAL.Migrations
{
    public partial class SongDifficultys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SongDifficultys",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    SongId = table.Column<int>(type: "int", nullable: false),
                    DifficultyId = table.Column<int>(type: "int", nullable: false),
                    DifficultyRating = table.Column<float>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SongDifficultys", sd => sd.Id);
                    table.ForeignKey(
                        name: "FK_SongDifficultys_Songs",
                        column: sd => sd.SongId,
                        principalTable: "songs",
                        principalColumn: "SongId");
                    table.ForeignKey(name: "FK_SongDifficultys_Difficultys",
                        column: sd => sd.DifficultyId,
                        principalTable: "diffcultys",
                        principalColumn: "Id");
                }).Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_SongDifficultys_Songs",
                table: "SongDifficultys",
                column: "SongId");
            migrationBuilder.CreateIndex(
                name: "IX_SongDifficultys_Difficultys",
                table: "SongDifficultys",
                column: "DifficultyId");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("SongDifficultys");
        }
    }
}
