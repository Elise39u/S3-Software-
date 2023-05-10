using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EnityFrameworkDAL.Migrations
{
    public partial class SeedDiffcultysData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Diffcultys",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Easy" },
                    { 2, "Normal" },
                    { 3, "Hard" },
                    { 4, "Extreme" },
                    { 5, "Extra Extreme" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Diffcultys",
                keyColumn: "Id",
                keyValues: new object[] { 1, 2, 3, 4, 5 });
        }
    }
}
